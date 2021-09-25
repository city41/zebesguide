import clsx from 'clsx';
import React from 'react';
import { SaveFile } from '../../../lib/parser';
import { LoadOutList, LoadOutListEntry } from './LoadOutList';
import { LoadOutSection } from './LoadOutSection';

import samusBaseSuitSvg from './samusBaseSuit.svg';

type SamusLoadOutProps = {
	className?: string;
	saveFile: SaveFile;
};

function SamusLoadOut({ className, saveFile }: SamusLoadOutProps) {
	return (
		<div
			className={clsx(
				className,
				'h-full px-8 pt-32 flex flex-row border-l-4 border-r-4 border-hud-purple'
			)}
			style={{
				backgroundImage: 'url(/grid-background.png)',
				backgroundSize: '28px',
			}}
		>
			<div className="w-1/3 flex flex-col gap-y-8">
				<LoadOutSection title="SUPPLY">mode auto</LoadOutSection>
				<LoadOutSection title="BEAM" style={{ width: '70%', margin: '0 auto' }}>
					<LoadOutList>
						<LoadOutListEntry
							label="CHARGE"
							inInventory={saveFile.beam.charge.inInventory}
							equipped={saveFile.beam.charge.equipped}
						/>
						<LoadOutListEntry
							label="ICE"
							inInventory={saveFile.beam.ice.inInventory}
							equipped={saveFile.beam.ice.equipped}
						/>
						<LoadOutListEntry
							label="WAVE"
							inInventory={saveFile.beam.wave.inInventory}
							equipped={saveFile.beam.wave.equipped}
						/>
						<LoadOutListEntry
							label="SPAZER"
							inInventory={saveFile.beam.spazer.inInventory}
							equipped={saveFile.beam.spazer.equipped}
						/>
						<LoadOutListEntry
							label="PLASMA"
							inInventory={saveFile.beam.plasma.inInventory}
							equipped={saveFile.beam.plasma.equipped}
						/>
					</LoadOutList>
				</LoadOutSection>
			</div>
			<div className="w-1/3">
				<img
					className="mx-auto"
					src={samusBaseSuitSvg}
					alt="samus base suit illustration"
				/>
			</div>
			<div className="w-1/3 flex flex-col gap-y-8">
				<LoadOutSection title="SUIT">
					<LoadOutList>
						<LoadOutListEntry
							label="VARIA SUIT"
							inInventory={saveFile.suits.varia.inInventory}
							equipped={saveFile.suits.varia.equipped}
						/>
						<LoadOutListEntry
							label="GRAVITY SUIT"
							inInventory={saveFile.suits.gravity.inInventory}
							equipped={saveFile.suits.gravity.equipped}
						/>
					</LoadOutList>
				</LoadOutSection>
				<LoadOutSection title="MISC.">
					<LoadOutList>
						<LoadOutListEntry
							label="MORPHING BALL"
							inInventory={saveFile.misc.morphingBall.inInventory}
							equipped={saveFile.misc.morphingBall.equipped}
						/>
						<LoadOutListEntry
							label="BOMB"
							inInventory={saveFile.misc.bombs.inInventory}
							equipped={saveFile.misc.bombs.equipped}
						/>
						<LoadOutListEntry
							label="SCREW ATTACK"
							inInventory={saveFile.misc.screwAttack.inInventory}
							equipped={saveFile.misc.screwAttack.equipped}
						/>
					</LoadOutList>
				</LoadOutSection>
				<LoadOutSection title="BOOTS">
					<LoadOutList>
						<LoadOutListEntry
							label="HI-JUMP BOOTS"
							inInventory={saveFile.boots.hiJumpBoots.inInventory}
							equipped={saveFile.boots.hiJumpBoots.equipped}
						/>
						<LoadOutListEntry
							label="SPACE JUMP"
							inInventory={saveFile.boots.spaceJump.inInventory}
							equipped={saveFile.boots.spaceJump.equipped}
						/>
						<LoadOutListEntry
							label="SPEED BOOSTER"
							inInventory={saveFile.boots.speedBooster.inInventory}
							equipped={saveFile.boots.speedBooster.equipped}
						/>
					</LoadOutList>
				</LoadOutSection>
			</div>
		</div>
	);
}

export { SamusLoadOut };
