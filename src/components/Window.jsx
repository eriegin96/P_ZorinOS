import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function Window() {
	const { initialLayout, setLayout } = useContext(AppContext);

	return (
		<div className='overflow-x-hidden grow text-white grid grid-cols-12 grid-rows-6'>
			<div onClick={() => setLayout({ ...initialLayout, window: true })}>Window</div>
			<div onClick={() => setLayout({ ...initialLayout, grid: true })}>Grid</div>
			<div onClick={() => setLayout({ ...initialLayout, ubuntu: true })}>Ubuntu</div>
		</div>
	);
}
