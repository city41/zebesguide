import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSave, parse } from '../../lib/parser';

type ZebesState = {
	saveFiles: GameSave[];
};

const defaultInitialState: ZebesState = {
	saveFiles: [],
};

const initialState = defaultInitialState;

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setSaveFileData(state: ZebesState, action: PayloadAction<Uint8Array>) {
			state.saveFiles = parse(action.payload);
		},
	},
});

const reducer = mapSlice.reducer;
const { setSaveFileData } = mapSlice.actions;

export type { ZebesState };
export { reducer, setSaveFileData };
