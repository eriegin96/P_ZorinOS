import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit';
import { BACKGROUND_LIST } from '../constants';

const mainColor = 'blue';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		layout: 'window',
		background: BACKGROUND_LIST[0].day,
		mainColor: mainColor,
		// blue, green, orange, red, purple, gray
		colorSet: {
			text: `text-${mainColor}-dark`,
			bg: `bg-${mainColor}-dark`,
			border: `border-${mainColor}-dark`,
			outline: `outline-${mainColor}-dark`,
		},
		brightness: 50,
		volume: 100,
		batteryLevel: 100,
		isCharging: false,
	},
	reducers: {
		changeLayout: (state, action) => {
			state.layout = action.payload;
		},
		changeMainColor: (state, action) => {
			state.mainColor = action.payload;
		},
		changeBrightness: (state, action) => {
			state.brightness = action.payload;
		},
		changeVolume: (state, action) => {
			state.volume = action.payload;
		},
		changeBatteryLevel: (state, action) => {
			state.batteryLevel = action.payload;
		},
		toggleCharging: (state, action) => {
			state.isCharging = action.payload;
		},
	},
});

export const selectLayout = (state) => state.settings.layout;
export const selectBackground = (state) => state.settings.background;
export const selectMainColor = (state) => state.settings.mainColor;
export const selectColorset = (state) => state.settings.colorSet;
export const selectBrightness = (state) => state.settings.brightness;
export const selectVolume = (state) => state.settings.volume;
export const selectBatteryLevel = (state) => state.settings.batteryLevel;
export const selectIsCharging = (state) => state.settings.isCharging;
export const {
	changeLayout,
	changeMainColor,
	changeBrightness,
	changeVolume,
	changeBatteryLevel,
	toggleCharging,
} = settingsSlice.actions;

export default settingsSlice.reducer;
