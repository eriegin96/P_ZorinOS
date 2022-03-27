import React, { createContext, useState, useEffect } from 'react';
import { BACKGROUND_LIST } from '../constants';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const [isLocked, setIsLocked] = useState(true);

	// Appearance
	// const [layout, setLayout] = useState({ window: true, grid: false, ubuntu: false });
	const [bg, setBg] = useState(BACKGROUND_LIST[0]);
	const [darkTheme, setDarkTheme] = useState(false);
	useEffect(() => {
		document.documentElement.classList.toggle('dark');
	}, [darkTheme]);

	// blue, green, orange, red, purple, gray
	const [color, setColor] = useState({
		text: `text-blue-dark`,
		bg: `bg-blue-dark`,
		border: `border-blue-dark`,
		outline: `outline-blue-dark`,
	});

	// Setting
	// const [brightness, setBrightness] = useState(50);
	// const [volume, setVolume] = useState(50);

	const value = { isLocked, setIsLocked, bg, setBg, darkTheme, setDarkTheme, color, setColor };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
