import { createSlice } from '@reduxjs/toolkit';
import { BACKGROUND_LIST } from '../constants';

const MAIN_COLOR = 'blue';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		layout: 'window',
		background: BACKGROUND_LIST[0].day,
		darkTheme: JSON.parse(localStorage.getItem('dark-theme')) ?? false,
		mainColor: MAIN_COLOR,
		// blue, green, orange, red, purple
		colorSet: {
			text: `text-${MAIN_COLOR}-dark`,
			bg: `bg-${MAIN_COLOR}-dark`,
			bgImage: `bg-gradient-${MAIN_COLOR}`,
			bgImageHover: `bg-gradient-${MAIN_COLOR}-hover`,
			border: `border-${MAIN_COLOR}-dark`,
			outline: `outline-${MAIN_COLOR}-dark`,
		},
		brightness: 50,
		volume: 100,
		batteryLevel: 100,
		isCharging: false,
		isWindowGrid: false,
	},
	reducers: {
		changeLayout: (state, action) => {
			state.layout = action.payload;
		},
		toggleDarkTheme: (state) => {
			state.darkTheme = !state.darkTheme;
			state.colorSet = {
				text: `text-${state.mainColor}-${state.darkTheme ? 'light' : 'dark'}`,
				bg: `bg-${state.mainColor}-${state.darkTheme ? 'light' : 'dark'}`,
				bgImage: `bg-gradient-${state.mainColor}`,
				bgImageHover: `bg-gradient-${state.mainColor}-hover`,
				border: `border-${state.mainColor}-${state.darkTheme ? 'light' : 'dark'}`,
				outline: `outline-${state.mainColor}-${state.darkTheme ? 'light' : 'dark'}`,
			};
			document.documentElement.classList.toggle('dark');
			localStorage.setItem('dark-theme', state.darkTheme);
		},
		changeMainColor: (state, action) => {
			state.mainColor = action.payload;
			state.colorSet = {
				text: `text-${action.payload}-${state.darkTheme ? 'light' : 'dark'}`,
				bg: `bg-${action.payload}-${state.darkTheme ? 'light' : 'dark'}`,
				bgImage: `bg-gradient-${action.payload}`,
				bgImageHover: `bg-gradient-${action.payload}-hover`,
				border: `border-${action.payload}-${state.darkTheme ? 'light' : 'dark'}`,
				outline: `outline-${action.payload}-${state.darkTheme ? 'light' : 'dark'}`,
			};
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
		toggleWindowGrid: (state) => {
			state.isWindowGrid = !state.isWindowGrid;
		},
	},
});

export const selectLayout = (state) => state.settings.layout;
export const selectBackground = (state) => state.settings.background;
export const selectDarkTheme = (state) => state.settings.darkTheme;
export const selectMainColor = (state) => state.settings.mainColor;
export const selectColorset = (state) => state.settings.colorSet;
export const selectBrightness = (state) => state.settings.brightness;
export const selectVolume = (state) => state.settings.volume;
export const selectBatteryLevel = (state) => state.settings.batteryLevel;
export const selectIsCharging = (state) => state.settings.isCharging;
export const selectIsWindowGrid = (state) => state.settings.isWindowGrid;
export const {
	changeLayout,
	toggleDarkTheme,
	changeMainColor,
	changeBrightness,
	changeVolume,
	changeBatteryLevel,
	toggleCharging,
	toggleWindowGrid,
} = settingsSlice.actions;

export default settingsSlice.reducer;
