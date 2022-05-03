import React, { createContext, useState, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from '../app/settingsSlice';
import { BACKGROUND_LIST } from '../constants';
import { changeBackground } from '../utils/changeBackground';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const darkTheme = useSelector(selectDarkTheme);
	const [isLocked, setIsLocked] = useState(false);
	useEffect(() => {
		setMenuType('');
	}, [isLocked]);

	const [modalType, setModalType] = useState();
	// const [modalType, setModalType] = useState('full-screen');
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
	const changePointerPosition = (e) => {
		setPointerPosition({
			clientX: e.clientX,
			clientY: e.clientY,
			offsetLeft: e.target.offsetLeft,
			offsetTop: e.target.offsetTop,
			offsetHeight: e.target.offsetHeight,
			offsetWidth: e.target.offsetWidth,
		});
	};
	const handleContextMenu = (e) => {
		e.preventDefault();
		setMenuType('');
		if (!contextMenuOpen) setContextMenuOpen(true);

		setPointerPosition({
			clientX: e.clientX,
			clientY: e.clientY,
			offsetLeft: e.target.offsetLeft,
			offsetTop: e.target.offsetTop,
			offsetHeight: e.target.offsetHeight,
			offsetWidth: e.target.offsetWidth,
			right:
				e.target.id !== 'window'
					? e.target.parentNode.getBoundingClientRect().right
					: e.target.getBoundingClientRect().right,
			bottom:
				e.target.id !== 'window'
					? e.target.parentNode.getBoundingClientRect().bottom
					: e.target.getBoundingClientRect().bottom,
		});
	};

	// Settings
	const [currentTime, setCurrentTime] = useState(Date.now());
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentTime(Date.now());
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, [currentTime]);

	// Appearance
	const [bg, setBg] = useState(BACKGROUND_LIST[0].day);
	useLayoutEffect(() => {
		const newBg = changeBackground(new Date().getHours());
		setBg(newBg);
	}, [currentTime]);

	useLayoutEffect(() => {
		if (darkTheme) document.documentElement.classList.add('dark');
	}, []);

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
		changePointerPosition,
		handleContextMenu,
		isLocked,
		setIsLocked,
		bg,
		setBg,
		currentTime,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
