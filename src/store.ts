import { configureStore } from '@reduxjs/toolkit';
import {
	reducer as zebesReducer,
	ZebesState,
} from './components/IndexPage/zebesSlice';

type AppState = ZebesState;

const store = configureStore({ reducer: zebesReducer });

const dispatch = store.dispatch;

export { store, dispatch };
export type { AppState };
