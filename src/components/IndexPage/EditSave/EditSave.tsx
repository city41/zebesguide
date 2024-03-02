import React from 'react';
import { GameSave } from '../../../lib/parser';

type InternalEditSaveProps = {
	gameSave: GameSave;
};

function EditSave({ gameSave }: InternalEditSaveProps) {
	return <div>{gameSave.active}</div>;
}

export { EditSave };
