import React, { useState } from 'react';
import clsx from 'clsx';

type DropZoneProps = {
	onFileChosen: (file: File) => void;
};

function DropZone({ onFileChosen }: DropZoneProps) {
	const [fileOver, setFileOver] = useState(false);

	return (
		<div
			className={clsx(
				'h-full w-full px-6 py-4 flex flex-col items-center justify-center bg-gray-600 border border-dashed border-gray-100',
				{
					'bg-gray-400': fileOver,
				}
			)}
			onDragOver={(e) => {
				e.preventDefault();
				setFileOver(true);
			}}
			onDragLeave={(e) => {
				e.preventDefault();
				setFileOver(false);
			}}
			onDrop={(e) => {
				e.preventDefault();
				const file = e.dataTransfer.files?.[0];

				if (file) {
					onFileChosen(file);
				}
			}}
		>
			Drag a Super Metroid save file here,{' '}
			<label className="inline-block bg-gray-500 p-0.5">
				or, click here to choose
				<input
					style={{ width: 0.01, height: 0.01 }}
					type="file"
					onChange={(e) => {
						const file = e.target.files?.[0];
						if (file) {
							onFileChosen(file);
						}
					}}
				/>
			</label>
		</div>
	);
}

export { DropZone };
