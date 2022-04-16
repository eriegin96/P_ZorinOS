import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { changeLayout } from '../app/settingsSlice';
import { AppContext } from '../context/AppProvider';

export default function Window() {
	const dispatch = useDispatch();

	return (
		<div className='overflow-x-hidden grow text-white grid grid-cols-12 grid-rows-6'>
			<div onClick={() => dispatch(changeLayout('window'))}>Window</div>
			<div onClick={() => dispatch(changeLayout('grid'))}>Grid</div>
			<div onClick={() => dispatch(changeLayout('ubuntu'))}>Ubuntu</div>
		</div>
	);
}
