import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSave, parse } from '../../lib/parser';

type ZebesState = {
	saveFiles: null | [GameSave, GameSave, GameSave];
	chosenSaveFile: GameSave | null;
};

const defaultInitialState: ZebesState = {
	saveFiles: null,
	chosenSaveFile: null,
};

const initialState = defaultInitialState;

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setSaveFileData(state: ZebesState, action: PayloadAction<Uint8Array>) {
			state.saveFiles = parse(action.payload);
		},
		setSaveIndex(state: ZebesState, action: PayloadAction<number>) {
			if (state.saveFiles === null) {
				throw new Error('setSaveIndex: called before there are save files');
			}

			state.chosenSaveFile = state.saveFiles[action.payload];
		},
	},
});

const reducer = mapSlice.reducer;
const { setSaveFileData, setSaveIndex } = mapSlice.actions;

export type { ZebesState };
export { reducer, setSaveFileData, setSaveIndex };
