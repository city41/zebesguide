import { spawn, execSync } from 'child_process';
import fs from 'fs';
import robot from 'robotjs';
import { FIRST_SAVE_OFFSET, SAVE_SLOT_SIZE } from '../src/lib/getFirstSave';
import { offsets } from '../src/lib/parser/constants';

const lastOffset = [...offsets].sort((a, b) => a.offset - b.offset)[
	offsets.length - 1
];
const startOfMapArea =
	FIRST_SAVE_OFFSET + lastOffset.offset + lastOffset.offset / 8;
const endOfMapArea = FIRST_SAVE_OFFSET + SAVE_SLOT_SIZE;

function wait(millis: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, millis));
}

const DISABLE_SOUND = '-ds';

type ScriptEntry = {
	wait: number;
	key: string;
	description: string;
};

const startGameScript: ScriptEntry[] = [
	{
		wait: 2500,
		key: 'enter',
		description: 'enter to skip intro',
	},
	{
		wait: 700,
		key: 'enter',
		description: 'enter to title screen',
	},
	{
		wait: 700,
		key: 'enter',
		description: 'enter to save file screen',
	},
	{
		wait: 700,
		key: 'enter',
		description: 'enter to choose first save',
	},
	{
		wait: 700,
		key: 'enter',
		description: 'enter to start game',
	},
	// {
	// 	wait: 550,
	// 	key: 'a',
	// 	description: 'move past section overview map',
	// },
	{
		wait: 300,
		key: 'f1',
		description: 'enter zsnes menu',
	},
	{
		wait: 500,
		key: 'enter',
		description: 'take screenshot',
	},
];

async function runScript(script: ScriptEntry[]) {
	for (let i = 0; i < script.length; ++i) {
		const entry = script[i];
		await wait(entry.wait);
		robot.keyTap(entry.key);
		console.log(entry.description);
	}
}

function patchSave(byteToFlipIndex: number, bitToFlip: number) {
	const saveFileTemplateBuffer = fs.readFileSync(
		'/home/matt/dev/zebesguide/rom/smetroid.srm_template'
	);
	const saveFileTemplateData = new Uint8Array(saveFileTemplateBuffer.buffer);
	const view = new DataView(saveFileTemplateData.buffer);

	// save spot crateria (start of game)
	view.setUint8(FIRST_SAVE_OFFSET + 0x158, 0);
	// first save area
	view.setUint8(FIRST_SAVE_OFFSET + 0x156, 0);

	// set the one bit we are focused on
	view.setUint8(byteToFlipIndex, 1 << bitToFlip);

	const OUT_PATH = '/home/matt/dev/zebesguide/rom/smetroid.srm';

	fs.writeFileSync(OUT_PATH, saveFileTemplateData);

	execSync(`/home/matt/dev/zebesguide/automation/sanity/sanity ${OUT_PATH}`);
}

async function dumpScreenshot(byteToFlipIndex: number, bitToFlip: number) {
	patchSave(byteToFlipIndex, bitToFlip);

	spawn('zsnes', [DISABLE_SOUND, 'smetroid.sfc'], {
		cwd: '/home/matt/dev/zebesguide/rom',
	});

	await runScript(startGameScript);
	await wait(100);

	execSync('killall -9 zsnes');
}

async function main() {
	const secondsPerScreen =
		startGameScript.reduce<number>((building, entry) => {
			return building + entry.wait;
		}, 0) / 1000;

	console.log('total screenshots to take', endOfMapArea - startOfMapArea);
	console.log(
		'total time in hours',
		((endOfMapArea - startOfMapArea) * secondsPerScreen * 8) / 60 / 60
	);
	for (let i = startOfMapArea; i < endOfMapArea; ++i) {
		for (let bit = 0; bit < 8; ++bit) {
			await dumpScreenshot(i, bit);
		}
	}
}

main().then(() => {
	console.log('done');
});
