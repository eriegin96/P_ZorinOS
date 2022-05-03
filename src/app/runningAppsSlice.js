import { createSlice } from '@reduxjs/toolkit';
import { APP_LIST } from '../constants/apps';

export const runningAppsSlice = createSlice({
	name: 'runningApps',
	initialState: {
		normal: APP_LIST.map((app, index) => ({
			...app,
			isOpen: false,
			isNormal: false,
			isMaximized: false,
			isMinimized: false,
			normalPosition: { x: 100 + index * 5, y: 50 + index * 5 },
			position: { x: 100 + index * 10, y: 50 + index * 10 },
		})),
	},
	reducers: {
		openApp: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.name);
			if (selectedApp) {
				selectedApp.isOpen = true;
				selectedApp.isNormal = true;
			}
		},
		maximizeApp: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.name);
			if (selectedApp) {
				selectedApp.isMaximized = true;
				selectedApp.isNormal = false;
				selectedApp.isMinimized = false;
				selectedApp.position = { x: 0, y: 0 };
			}
		},
		minimizeApp: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.name);
			if (selectedApp) {
				selectedApp.isMinimized = true;
				selectedApp.isMaximized = false;
				selectedApp.isNormal = false;
			}
		},
		normalizeApp: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.name);
			if (selectedApp) {
				selectedApp.isNormal = true;
				selectedApp.isMaximized = false;
				selectedApp.isMinimized = false;
				selectedApp.position = selectedApp.normalPosition;
			}
		},
		closeApp: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.name);
			if (selectedApp) {
				selectedApp.isOpen = false;
				selectedApp.isMaximized = false;
				selectedApp.isNormal = false;
				selectedApp.isMinimized = false;
			}
		},
		changeAppPosition: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.app.name);
			if (selectedApp) {
				if (selectedApp.isNormal) selectedApp.normalPosition = action.payload.position;
				selectedApp.position = action.payload.position;
			}
		},
	},
});

export const selectRunningApps = (state) => state.runningApps.normal;
export const {
	openApp,
	moveAppOnTop,
	maximizeApp,
	minimizeApp,
	normalizeApp,
	closeApp,
	changeAppPosition,
} = runningAppsSlice.actions;

export default runningAppsSlice.reducer;
