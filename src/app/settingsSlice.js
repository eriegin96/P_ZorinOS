import { createSlice } from '@reduxjs/toolkit';
import { BACKGROUND_LIST } from '../constants';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		layout: {
			window: true,
			grid: false,
			ubuntu: false,
		},
		background: BACKGROUND_LIST[0].day,
		mainColor: 'blue',
		colorSet: {
			text: `text-${initialState.mainColor}-dark`,
			bg: `bg-${initialState.mainColor}-dark`,
			border: `border-${initialState.mainColor}-dark`,
			outline: `outline-${initialState.mainColor}-dark`,
		},
		brightness: 50,
		volume: 100,
		batteryLevel: 100,
		isCharging: false,
	},
	reducers: {
		increaseBrightness: (state) => {
			state.brightness += 1;
		},
		decreaseBrightness: (state) => {
			state.brightness -= 1;
		},
		increaseVolume: (state) => {
			state.volume += 1;
		},
		decreaseVolume: (state) => {
			state.volume -= 1;
		},
		toggleCharging: (state) => {
			state.isCharging = !state.isCharging;
		},
	},
});

export const selectIsCharging = (state) => state.settings.isCharging;
export const { increment, decrement, incrementByAmount } = settingsSlice.actions;

export default settingsSlice.reducer;
