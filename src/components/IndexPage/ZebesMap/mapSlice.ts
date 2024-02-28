import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSave } from '../../../lib/parser';

type MapState = {
	matrix: CellMatrix;
};

const defaultInitialState: MapState = { matrix:  };

const initialState = defaultInitialState;

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setGameSave(state: MapState, _action: PayloadAction<GameSave>) {
            state.matrix = 
        },
	},
});

const reducer = mapSlice.reducer;
const { setGameSave } = mapSlice.actions;

export type { MapState };
export { reducer, setGameSave };
