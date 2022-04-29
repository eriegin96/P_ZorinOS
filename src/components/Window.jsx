import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { openApp } from '../app/runningAppsSlice';
import { changeLayout, selectIsWindowGrid, toggleWindowGrid } from '../app/settingsSlice';
import { APP_LIST } from '../constants/apps';
import { WindowIconButton } from './common/Button';
import DraggableIcon from './common/DraggableIcon';

export default function Window() {
	const dispatch = useDispatch();
	const isWindowGrid = useSelector(selectIsWindowGrid);
	const [icons, setIcons] = useState(APP_LIST);

	const moveIcon = (dragIndex, hoverIndex) => {
		const prevIcons = [...icons];
		const [moveIcon] = prevIcons.splice(dragIndex, 1);
		prevIcons.splice(hoverIndex, 0, moveIcon);

		setIcons(prevIcons);
	};

	const handleStart = (e) => {
		const newZIndex = icons.length + 1;

		const allIcons = document.querySelectorAll('.WindowIconButton');
		allIcons.forEach((element) => {
			element.style.zIndex = '0';
		});

		e.target.style.zIndex = newZIndex.toString();
	};

	return (
		<>
			{isWindowGrid ? (
				<DndProvider backend={HTML5Backend}>
					<div className='overflow-x-hidden p-1 grow text-white grid grid-cols-16 grid-rows-7 grid-flow-col'>
						<div onClick={() => dispatch(changeLayout('window'))}>Window</div>
						<div onClick={() => dispatch(changeLayout('grid'))}>Grid</div>
						<div onClick={() => dispatch(changeLayout('ubuntu'))}>Ubuntu</div>
						<div onClick={() => dispatch(toggleWindowGrid())}>Grid</div>
						{icons.map((app, index) => (
							<WindowIconButton
								key={app.name}
								id={app.id}
								index={index}
								icon={app.icon}
								title={app.title}
								onDoubleClick={() => dispatch(openApp(app))}
								moveIcon={moveIcon}
							>
								<img src={app.icon} alt={app.title} className='mb-1.5 h-12 w-12' />
								<p className='text-xs text-shadow'>{app.title}</p>
							</WindowIconButton>
						))}
					</div>
				</DndProvider>
			) : (
				<div className='overflow-x-hidden p-1 grow text-white grid grid-cols-16 grid-rows-7 grid-flow-col'>
					<div onClick={() => dispatch(changeLayout('window'))}>Window</div>
					<div onClick={() => dispatch(changeLayout('grid'))}>Grid</div>
					<div onClick={() => dispatch(changeLayout('ubuntu'))}>Ubuntu</div>
					<div onClick={() => dispatch(toggleWindowGrid())}>Grid</div>
					{icons.map((app, index) => (
						<DraggableIcon key={app.name} onStart={handleStart}>
							<button className='handle justify-self-center py-1 px-2 flex flex-col items-center rounded-md cursor-default WindowIconButton Transition-colors'>
								<img
									draggable='false'
									src={app.icon}
									alt={app.title}
									className='mb-1.5 h-12 w-12 pointer-events-none'
								/>
								<p className='text-xs text-shadow pointer-events-none'>{app.title}</p>
							</button>
						</DraggableIcon>
					))}
				</div>
			)}
		</>
	);
}
