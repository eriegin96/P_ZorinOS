import { createSlice } from '@reduxjs/toolkit';

export const runningAppsSlice = createSlice({
	name: 'runningApps',
	initialState: {
		open: [],
		minimize: [],
		maximize: [],
	},
	reducers: {
		openApp: (state, action) => {
			state.open.push(action.payload);
		},
		maximizeApp: (state, action) => {
			state.open.splice(action.payload);
			state.minimize.splice(action.payload);
			state.maximize.push(action.payload);
		},
		minimizeApp: (state, action) => {
			state.open.splice(action.payload);
			state.maximize.splice(action.payload);
			state.minimize.push(action.payload);
		},
		normalizeApp: (state, action) => {
			state.minimize.splice(action.payload);
			state.maximize.splice(action.payload);
			state.open.push(action.payload);
		},
		closeApp: (state, action) => {
			state.open.splice(action.payload);
			state.minimize.splice(action.payload);
			state.maximize.splice(action.payload);
		},
	},
});

export const selectCount = (state) => state.runningApps.value;
export const { increment, decrement, incrementByAmount } = runningAppsSlice.actions;

export default runningAppsSlice.reducer;
