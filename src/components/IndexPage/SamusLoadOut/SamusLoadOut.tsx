import clsx from 'clsx';
import React from 'react';
import { SaveFile } from '../../../lib/parser';

type SamusLoadOutProps = {
	className?: string;
	saveFile: SaveFile;
};

function SamusLoadOut({ className }: SamusLoadOutProps) {
	return <div className={clsx(className)}>samus load out</div>;
}

export { SamusLoadOut };
