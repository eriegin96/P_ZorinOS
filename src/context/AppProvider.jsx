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

	const [contextMenuOpen, setContextMenuOpen] = useState(false);
	const [pointerPosition, setPointerPosition] = useState({
		clientX: 0,
		clientY: 0,
		offsetLeft: 0,
		offsetTop: 0,
		offsetHeight: 0,
		offsetWidth: 0,
	});
	const handleContextMenu = (e) => {
		e.preventDefault();
		if (!contextMenuOpen) setContextMenuOpen(true);

		setPointerPosition({
			clientX: e.clientX,
			clientY: e.clientY,
			offsetLeft: e.target.offsetLeft,
			offsetTop: e.target.offsetTop,
			offsetHeight: e.target.offsetHeight,
			offsetWidth: e.target.offsetWidth,
			right: e.target.getBoundingClientRect().right,
			bottom: e.target.getBoundingClientRect().bottom,
		});
	};

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
		const newBg = changeBackground(new Date().getHours());
		setBg(newBg);
	}, [currentTime]);

	const [darkTheme, setDarkTheme] = useState(false);
	// useEffect(() => {
	// document.documentElement.classList.toggle('dark');
	// }, [darkTheme]);

	const value = {
		modalType,
		setModalType,
		menuType,
		setMenuType,
		initialDraggableModalType,
		draggableModalType,
		setDraggableModalType,
		contextMenuOpen,
		setContextMenuOpen,
		pointerPosition,
		setPointerPosition,
		handleContextMenu,
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
