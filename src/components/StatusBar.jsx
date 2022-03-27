import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function StatusBar() {
	const { darkTheme, setDarkTheme } = useContext(AppContext);

	return (
		<div
			className='text-white dark:text-black'
			onClick={(e) => {
				e.stopPropagation();
				setDarkTheme(!darkTheme);
			}}
		>
			StatusBar
		</div>
	);
}
