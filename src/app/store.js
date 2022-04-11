import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';

const rootReducer = {
	settings: settingsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
