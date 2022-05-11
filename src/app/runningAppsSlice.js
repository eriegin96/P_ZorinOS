import { createSlice } from '@reduxjs/toolkit';
import { APP_LIST } from '../constants/apps';

export const runningAppsSlice = createSlice({
	name: 'runningApps',
	initialState: {
		normal: [],
	},
	reducers: {
		openApp: (state, action) => {
			state.normal.push({
				...action.payload,
				zIndex: APP_LIST.length + state.normal.length,
				isActive: false,
				isOpen: true,
				isNormal: true,
				isMaximized: false,
				isMinimized: false,
				normalPosition: {
					x: document.body.getBoundingClientRect().width / 4 + state.normal.length * 20,
					y: document.body.getBoundingClientRect().height / 5 + state.normal.length * 20,
				},
				position: {
					x: document.body.getBoundingClientRect().width / 4 + state.normal.length * 20,
					y: document.body.getBoundingClientRect().height / 5 + state.normal.length * 20,
				},
			});
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
			const selectedAppIndex = state.normal.findIndex((a) => a.name === action.payload.name);
			state.normal.splice(selectedAppIndex, 1);
		},
		changeAppPosition: (state, action) => {
			const selectedApp = state.normal.find((a) => a.name === action.payload.app.name);
			if (selectedApp.isNormal) {
				if (
					Math.abs(action.payload.position.x - selectedApp.position.x) > 1 ||
					Math.abs(action.payload.position.y - selectedApp.position.y) > 1
				) {
					selectedApp.normalPosition = action.payload.position;
					selectedApp.position = action.payload.position;
				}
			}
		},
		changeActiveApp: (state, action) => {
			state.normal.forEach((a) => {
				if (a.zIndex > action.payload.zIndex) {
					a.zIndex = a.zIndex - 1;
				}

				if (a.name === action.payload.name) {
					a.isActive = true;
					a.zIndex = APP_LIST.length + state.normal.length - 1;
				} else {
					a.isActive = false;
				}
			});
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
	changeActiveApp,
} = runningAppsSlice.actions;

export default runningAppsSlice.reducer;
