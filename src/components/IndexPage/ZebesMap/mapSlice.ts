import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameSave } from '../../../lib/parser';
import { MAP_COLS, MAP_ROWS } from '../../../lib/parser/cells/constants';

type MapState = {
	matrix: CellMatrix;
};

const defaultInitialState: MapState = {
	matrix: new Array(MAP_ROWS).fill(0).map(() => {
		return new Array(MAP_COLS).fill(0).map(() => {
			return {
				exposed: false,
			};
		});
	}),
};

const initialState = defaultInitialState;

const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setGameSave(state: MapState, _action: PayloadAction<GameSave>) {
			state.matrix = state.matrix.map((r) => {
				return r.map((c, i) => {
					return {
						...c,
						exposed: !!(i & 1),
					};
				});
			});
		},
	},
});

const reducer = mapSlice.reducer;
const { setGameSave } = mapSlice.actions;

export type { MapState };
export { reducer, setGameSave };
