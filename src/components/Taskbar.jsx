import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from './taskbarSlice';
import { AppContext } from '../context/AppProvider';
import StatusBar from './StatusBar';

export default function Taskbar() {
	const { layout } = useContext(AppContext);
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	return (
		<div className='w-full flex justify-between items-center shadow-md text-white bg-black text-sm'>
			{layout.window && (
				<>
					<div className='h-12 px-3 py-1'>Menu</div>
					<div className='px-2 py-1'>Apps</div>
					<StatusBar className='mr-1' />
				</>
			)}

			{layout.grid && (
				<>
					<div className='h-12 px-3 py-1'>Menu</div>
					<div className='px-2 py-1'>Apps</div>
					<StatusBar className='mr-1' />
				</>
			)}

			{layout.ubuntu && (
				<>
					<div className='px-3 py-1'>Activities</div>
					<div className='px-2 py-1'>Sat Mar 26 9:37AM</div>
					<StatusBar className='mr-1' />
				</>
			)}
		</div>
	);
}
