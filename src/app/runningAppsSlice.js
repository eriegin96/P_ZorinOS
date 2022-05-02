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
			if (state.open.findIndex((a) => a.name === action.payload.name) < 0)
				state.open.push(action.payload);
		},
		maximizeApp: (state, action) => {
			state.open.splice(
				state.open.findIndex((a) => a.name === action.payload.name),
				1
			);
			state.maximized.push(action.payload);
		},
		minimizeApp: (state, action) => {
			const minimizeAppIndex = state.open.findIndex((a) => a.name === action.payload.name);
			if (minimizeAppIndex >= 0) {
				state.open.splice(minimizeAppIndex, 1);
			} else {
				state.maximized.splice(
					state.maximized.findIndex((a) => a.name === action.payload.name),
					1
				);
			}

			state.minimized.push(action.payload);
		},
		normalizeApp: (state, action) => {
			const normalizeAppIndex = state.minimized.findIndex((a) => a.name === action.payload.name);
			if (normalizeAppIndex >= 0) {
				state.minimized.splice(normalizeAppIndex, 1);
			} else {
				state.maximized.splice(
					state.maximized.findIndex((a) => a.name === action.payload.name),
					1
				);
			}

			state.open.push(action.payload);
		},
		closeApp: (state, action) => {
			const closeAppIndex = state.open.findIndex((a) => a.name === action.payload.name);
			if (closeAppIndex >= 0) {
				state.open.splice(closeAppIndex, 1);
			} else if (state.minimized.findIndex((a) => a.name === action.payload.name) >= 0) {
				state.minimized.splice(state.minimized.findIndex((a) => a.name === action.payload.name));
			} else {
				state.maximized.splice(state.maximized.findIndex((a) => a.name === action.payload.name));
			}
		},
	},
});

export const selectRunningApps = (state) => state.runningApps.open;
export const selectRunningMaximizedApps = (state) => state.runningApps.maximized;
export const selectRunningMinimizedApps = (state) => state.runningApps.minimized;
export const { openApp, moveAppOnTop, maximizeApp, minimizeApp, normalizeApp, closeApp } =
	runningAppsSlice.actions;

export default runningAppsSlice.reducer;
