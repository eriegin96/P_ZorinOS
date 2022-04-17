import React, { createContext, useState, useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { BACKGROUND_LIST } from '../constants';
import { changeBackground } from '../utils/changeBackground';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const [isLocked, setIsLocked] = useState(false);

	const [modalType, setModalType] = useState();
	const [menuType, setMenuType] = useState();
	const initialDraggableModalType = {
		app: false,
		file: false,
	};
	const [draggableModalType, setDraggableModalType] = useState(initialDraggableModalType);

	// Settings
	const [currentTime, setCurrentTime] = useState(Date.now());
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(Date.now());
		}, 1000);

		return () => clearInterval(interval);
	}, [currentTime]);

	// Appearance
	const [bg, setBg] = useState(BACKGROUND_LIST[0].day);
	useLayoutEffect(() => {
		const newBg = changeBackground(currentTime);
		setBg(newBg);
	}, [currentTime]);

	const [darkTheme, setDarkTheme] = useState(false);
	useEffect(() => {
		// document.documentElement.classList.toggle('dark');
	}, [darkTheme]);

	const value = {
		modalType,
		setModalType,
		menuType,
		setMenuType,
		initialDraggableModalType,
		draggableModalType,
		setDraggableModalType,
		isLocked,
		setIsLocked,
		bg,
		setBg,
		darkTheme,
		setDarkTheme,
		currentTime,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
