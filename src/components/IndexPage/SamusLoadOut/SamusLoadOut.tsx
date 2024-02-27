import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { GameSave } from '../../../lib/parser';
import { LoadOutList, LoadOutListEntry } from './LoadOutList';
import { LoadOutSection } from './LoadOutSection';

import samusBaseSuitSvg from './samusBaseSuit.svg';

type SamusLoadOutProps = {
	className?: string;
	style?: CSSProperties;
	gameSave: GameSave;
};

function SamusLoadOut({ className, style, gameSave }: SamusLoadOutProps) {
	return (
		<div
			className={clsx(className, 'border-8 border-white rounded-xl')}
			style={style}
		>
			<div
				className={clsx(
					'h-full px-8 pt-32 flex flex-row border-l-4 border-r-4 border-hud-purple'
				)}
				style={{
					backgroundImage: 'url(/grid-background.png)',
					backgroundSize: '28px',
				}}
			>
				<div className="w-1/3 flex flex-col gap-y-8 mt-8">
					<LoadOutSection title="SUPPLY">mode auto</LoadOutSection>
					<LoadOutSection
						title="BEAM"
						style={{ width: '70%', margin: '0 auto' }}
					>
						<LoadOutList>
							<LoadOutListEntry
								label="CHARGE"
								inInventory={gameSave.beam.charge.inInventory}
								equipped={gameSave.beam.charge.equipped}
							/>
							<LoadOutListEntry
								label="ICE"
								inInventory={gameSave.beam.ice.inInventory}
								equipped={gameSave.beam.ice.equipped}
							/>
							<LoadOutListEntry
								label="WAVE"
								inInventory={gameSave.beam.wave.inInventory}
								equipped={gameSave.beam.wave.equipped}
							/>
							<LoadOutListEntry
								label="SPAZER"
								inInventory={gameSave.beam.spazer.inInventory}
								equipped={gameSave.beam.spazer.equipped}
							/>
							<LoadOutListEntry
								label="PLASMA"
								inInventory={gameSave.beam.plasma.inInventory}
								equipped={gameSave.beam.plasma.equipped}
							/>
						</LoadOutList>
					</LoadOutSection>
				</div>
				<div className="w-1/3">
					<img
						className="mx-auto"
						src={samusBaseSuitSvg.src}
						alt="samus base suit illustration"
					/>
				</div>
				<div className="w-1/3 flex flex-col gap-y-8 mt-8">
					<LoadOutSection title="SUIT">
						<LoadOutList>
							<LoadOutListEntry
								label="VARIA SUIT"
								inInventory={gameSave.suits.varia.inInventory}
								equipped={gameSave.suits.varia.equipped}
							/>
							<LoadOutListEntry
								label="GRAVITY SUIT"
								inInventory={gameSave.suits.gravity.inInventory}
								equipped={gameSave.suits.gravity.equipped}
							/>
						</LoadOutList>
					</LoadOutSection>
					<LoadOutSection title="MISC.">
						<LoadOutList>
							<LoadOutListEntry
								label="MORPHING BALL"
								inInventory={gameSave.misc.morphingBall.inInventory}
								equipped={gameSave.misc.morphingBall.equipped}
							/>
							<LoadOutListEntry
								label="BOMB"
								inInventory={gameSave.misc.bombs.inInventory}
								equipped={gameSave.misc.bombs.equipped}
							/>
							<LoadOutListEntry
								label="SCREW ATTACK"
								inInventory={gameSave.misc.screwAttack.inInventory}
								equipped={gameSave.misc.screwAttack.equipped}
							/>
						</LoadOutList>
					</LoadOutSection>
					<LoadOutSection title="BOOTS">
						<LoadOutList>
							<LoadOutListEntry
								label="HI-JUMP BOOTS"
								inInventory={gameSave.boots.hiJumpBoots.inInventory}
								equipped={gameSave.boots.hiJumpBoots.equipped}
							/>
							<LoadOutListEntry
								label="SPACE JUMP"
								inInventory={gameSave.boots.spaceJump.inInventory}
								equipped={gameSave.boots.spaceJump.equipped}
							/>
							<LoadOutListEntry
								label="SPEED BOOSTER"
								inInventory={gameSave.boots.speedBooster.inInventory}
								equipped={gameSave.boots.speedBooster.equipped}
							/>
						</LoadOutList>
					</LoadOutSection>
				</div>
			</div>
		</div>
	);
}

export { SamusLoadOut };
