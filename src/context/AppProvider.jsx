import React, { createContext, useState, useEffect } from 'react';
import { BACKGROUND_LIST } from '../constants';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const [isLocked, setIsLocked] = useState(true);

	const [modalType, setModalType] = useState();
	const initialDraggableModalType = {
		app: false,
		file: false,
	};
	const [draggableModalType, setDraggableModalType] = useState(initialDraggableModalType);

	// Appearance
	const [layout, setLayout] = useState({ window: true, grid: false, ubuntu: false });
	const [bg, setBg] = useState(BACKGROUND_LIST[0]);
	const [darkTheme, setDarkTheme] = useState(false);
	useEffect(() => {
		// document.documentElement.classList.toggle('dark');
	}, [darkTheme]);
	// blue, green, orange, red, purple, gray
	const [color, setColor] = useState({
		text: `text-blue-dark`,
		bg: `bg-blue-dark`,
		border: `border-blue-dark`,
		outline: `outline-blue-dark`,
	});

	// Setting
	const [brightness, setBrightness] = useState(50);
	const [volume, setVolume] = useState(100);
	const [currentTime, setCurrentTime] = useState(Date.now());
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, [currentTime]);

	const [batteryLevel, setBatteryLevel] = useState(100);
	const [isCharging, setIsCharging] = useState(false);
	useEffect(() => {
		navigator.getBattery &&
			navigator.getBattery().then((battery) => {
				const updateChargeInfo = () => {
					battery.charging ? setIsCharging(true) : setIsCharging(false);
				};
				const updateLevelInfo = () => {
					setBatteryLevel(Math.round(battery.level * 100));
				};
				const updateAllBatteryInfo = () => {
					updateChargeInfo();
					updateLevelInfo();
				};

				battery.addEventListener('chargingchange', () => {
					updateChargeInfo();
				});
				battery.addEventListener('levelchange', () => {
					updateLevelInfo();
				});

				updateAllBatteryInfo();
			});
	}, []);

	const value = {
		modalType,
		setModalType,
		initialDraggableModalType,
		draggableModalType,
		setDraggableModalType,
		isLocked,
		setIsLocked,
		bg,
		setBg,
		darkTheme,
		setDarkTheme,
		color,
		setColor,
		currentTime,
		brightness,
		setBrightness,
		volume,
		setVolume,
		batteryLevel,
		setBatteryLevel,
		isCharging,
		setIsCharging,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
