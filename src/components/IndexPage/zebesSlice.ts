import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSave, parse } from '../../lib/parser';

type ZebesState = {
	saveFiles: null | [GameSave, GameSave, GameSave];
	isDemo?: boolean;
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
		setIsDemo(state: ZebesState, action: PayloadAction<boolean>) {
			state.isDemo = action.payload;
		},
		setSaveIndex(state: ZebesState, action: PayloadAction<number>) {
			if (state.saveFiles === null) {
				throw new Error('setSaveIndex: called before there are save files');
			}

			state.chosenSaveFile = state.saveFiles[action.payload];
		},
		reset(state: ZebesState) {
			state.saveFiles = null;
			state.chosenSaveFile = null;
		},
	},
});

const reducer = mapSlice.reducer;
const { setSaveFileData, setIsDemo, setSaveIndex, reset } = mapSlice.actions;

export type { ZebesState };
export { reducer, setSaveFileData, setIsDemo, setSaveIndex, reset };
