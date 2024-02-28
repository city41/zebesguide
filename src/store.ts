import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
	reducer as mapReducer,
	MapState,
} from './components/IndexPage/ZebesMap/mapSlice';

type AppState = {
	map: MapState;
};

const rootReducer = combineReducers({
	map: mapReducer,
});

const store = configureStore({ reducer: rootReducer });

const dispatch = store.dispatch;

export { store, dispatch };
export type { AppState };
