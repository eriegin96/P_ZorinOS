import React, { useContext, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { openApp } from '../app/runningAppsSlice';
import { changeLayout } from '../app/settingsSlice';
import { APP_LIST } from '../constants/apps';
import { AppContext } from '../context/AppProvider';
import { WindowIconButton } from './common/Button';

export default function Window() {
	const dispatch = useDispatch();
	const [icons, setIcons] = useState(APP_LIST);
	const moveIcon = (dragIndex, hoverIndex) => {
		const prevIcons = [...icons];
		const [moveIcon] = prevIcons.splice(dragIndex, 1);
		prevIcons.splice(hoverIndex, 0, moveIcon);

		setIcons(prevIcons);
	};

	return (
		// grid grid-cols-12 grid-rows-6
		<DndProvider backend={HTML5Backend}>
			<div className='overflow-x-hidden p-1 grow text-white grid grid-cols-14 grid-rows-6 grid-flow-col'>
				<div onClick={() => dispatch(changeLayout('window'))}>Window</div>
				<div onClick={() => dispatch(changeLayout('grid'))}>Grid</div>
				<div onClick={() => dispatch(changeLayout('ubuntu'))}>Ubuntu</div>
				{icons.map((app, index) => (
					<WindowIconButton
						key={app.name}
						id={app.id}
						index={index}
						onDoubleClick={() => dispatch(openApp(app))}
						moveIcon={moveIcon}
					>
						<img src={app.icon} alt={app.title} className='mb-1.5 h-12 w-12' />
						<p className='text-xs'>{app.title}</p>
					</WindowIconButton>
				))}
			</div>
		</DndProvider>
	);
}
