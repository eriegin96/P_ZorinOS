import { createSlice } from '@reduxjs/toolkit';

export const runningAppsSlice = createSlice({
	name: 'runningApps',
	initialState: {
		open: [],
		minimized: [],
		maximized: [],
	},
	reducers: {
		openApp: (state, action) => {
			state.open.push(action.payload);
		},
		maximizeApp: (state, action) => {
			state.open.splice(
				state.open.indexOf((a) => a.name === action.payload.name),
				1
			);
			state.maximize.push(action.payload);
		},
		minimizeApp: (state, action) => {
			const minimizeAppIndex = state.open.indexOf((a) => a.name === action.payload.name);
			if (minimizeAppIndex >= 0) {
				state.open.splice(minimizeAppIndex, 1);
			} else {
				state.maximize.splice(
					state.maximize.indexOf((a) => a.name === action.payload.name),
					1
				);
			}

			state.minimize.push(action.payload);
		},
		normalizeApp: (state, action) => {
			const normalizeAppIndex = state.minimize.indexOf((a) => a.name === action.payload.name);
			if (normalizeAppIndex >= 0) {
				state.minimize.splice(normalizeAppIndex, 1);
			} else {
				state.maximize.splice(
					state.maximize.indexOf((a) => a.name === action.payload.name),
					1
				);
			}

			state.open.push(action.payload);
		},
		closeApp: (state, action) => {
			const closeAppIndex = state.open.indexOf((a) => a.name === action.payload.name);
			if (closeAppIndex >= 0) {
				state.open.splice(action.payload);
			} else if (state.minimize.indexOf((a) => a.name === action.payload.name) >= 0) {
				state.minimize.splice(state.minimize.indexOf((a) => a.name === action.payload.name));
			} else {
				state.maximize.splice(state.maximize.indexOf((a) => a.name === action.payload.name));
			}
		},
	},
});

export const selectRunningApps = (state) => state.runningApps.open;
export const selectRunningMaximizedApps = (state) => state.runningApps.maximized;
export const selectRunningMinimizedApps = (state) => state.runningApps.minimized;
export const { openApp, maximizeApp, minimizeApp, normalizeApp, closeApp } =
	runningAppsSlice.actions;

export default runningAppsSlice.reducer;
