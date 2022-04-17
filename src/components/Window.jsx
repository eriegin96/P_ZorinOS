import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { openApp } from '../app/runningAppsSlice';
import { changeLayout } from '../app/settingsSlice';
import { APP_LIST } from '../constants/apps';
import { AppContext } from '../context/AppProvider';
import { WindowIconButton } from './common/Button';

export default function Window() {
	const dispatch = useDispatch();

	return (
		// grid grid-cols-12 grid-rows-6
		<div className='overflow-x-hidden p-1 grow text-white grid grid-cols-12 grid-rows-6 grid-flow-col'>
			<div onClick={() => dispatch(changeLayout('window'))}>Window</div>
			<div onClick={() => dispatch(changeLayout('grid'))}>Grid</div>
			<div onClick={() => dispatch(changeLayout('ubuntu'))}>Ubuntu</div>
			{APP_LIST.map((app) => (
				<WindowIconButton key={app.name} onDoubleClick={() => dispatch(openApp(app))}>
					<img src={app.icon} alt={app.title} className='mb-1.5 h-12 w-12' />
					<p className='text-xs'>{app.title}</p>
				</WindowIconButton>
			))}
		</div>
	);
}
