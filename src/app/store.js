import { configureStore } from '@reduxjs/toolkit';
import runningAppsReducer from './runningAppsSlice';
import settingsReducer from './settingsSlice';

const rootReducer = {
	settings: settingsReducer,
	runningApps: runningAppsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
