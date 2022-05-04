import React, { useContext, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeActiveApp,
	changeAppPosition,
	closeApp,
	maximizeApp,
	minimizeApp,
	normalizeApp,
	openApp,
	selectRunningApps,
} from '../app/runningAppsSlice';
import { selectIsWindowGrid } from '../app/settingsSlice';
import { APP_LIST } from '../constants/apps';
import { AppContext } from '../context/AppProvider';
import { WindowIconButton, DraggableWindowItem } from '.';
import AppWindow from './app/AppWindow';

export default function Window() {
	const dispatch = useDispatch();
	const isWindowGrid = useSelector(selectIsWindowGrid);
	const runningApps = useSelector(selectRunningApps);
	const [icons, setIcons] = useState(APP_LIST);
	const { setContextMenuOpen } = useContext(AppContext);
	const iconRefs = useRef([]);
	const appRefs = useRef([]);

	const moveIcon = (dragIndex, hoverIndex) => {
		const prevIcons = [...icons];
		const [moveIcon] = prevIcons.splice(dragIndex, 1);
		prevIcons.splice(hoverIndex, 0, moveIcon);

		setIcons(prevIcons);
	};

	const handleStartDraggingIcon = (index) => {
		iconRefs.current.forEach((icon) => {
			icon.style.zIndex = '0';
		});

		iconRefs.current[index].style.zIndex = '1';
	};

	const handleStartDraggingAppWindow = (app) => {
		dispatch(changeActiveApp(app));
		runningApps.forEach((a, index) => {
			appRefs.current[index].style.zIndex = a.zIndex.toString();
		});
	};

	const handleStopDraggingAppWindow = (e, app) => {
		if (app.isNormal) {
			if (e.target.classList.contains('handle')) {
				dispatch(
					changeAppPosition({
						app,
						position: {
							x: e.clientX - e.offsetX,
							y: e.clientY - e.offsetY,
						},
					})
				);
			} else {
				dispatch(
					changeAppPosition({
						app,
						position: {
							x: e.clientX - e.offsetX - e.target.offsetLeft,
							y: e.clientY - e.offsetY - e.target.offsetTop,
						},
					})
				);
			}
		}
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div
				id='window'
				className='relative overflow-hidden grow text-white grid grid-cols-16 grid-rows-7 grid-flow-col'
				onClick={() => setContextMenuOpen(false)}
			>
				{/* Icons */}
				{icons.map((app, index) => {
					return isWindowGrid ? (
						<WindowIconButton
							key={app.name}
							id={app.id}
							index={index}
							icon={app.icon}
							title={app.title}
							onDoubleClick={() => dispatch(openApp(app))}
							moveIcon={moveIcon}
						>
							<img
								src={app.icon}
								alt={app.title}
								className='mb-1.5 h-12 w-12 pointer-events-none'
							/>
							<p className='text-xs text-shadow pointer-events-none'>{app.title}</p>
						</WindowIconButton>
					) : (
						<DraggableWindowItem key={app.name} onStart={() => handleStartDraggingIcon(index)}>
							<button
								className='handle justify-self-center py-1 px-2 flex flex-col items-center rounded-md cursor-default WindowIconButton TransitionColor'
								ref={(el) => {
									iconRefs.current[index] = el;
								}}
								onDoubleClick={() => dispatch(openApp(app))}
							>
								<img
									draggable='false'
									src={app.icon}
									alt={app.title}
									className='mb-1.5 h-12 w-12 pointer-events-none'
								/>
								<p className='text-xs text-shadow pointer-events-none'>{app.title}</p>
							</button>
						</DraggableWindowItem>
					);
				})}

				{/* Opening window */}
				{runningApps
					.filter((app) => app.isOpen)
					.map((app, index) => (
						<DraggableWindowItem
							key={'app-' + app.name}
							position={app.position}
							// onStart={() => handleStartDraggingAppWindow(app)}
							onStop={(e) => handleStopDraggingAppWindow(e, app)}
						>
							<div
								ref={(el) => {
									appRefs.current[index] = el;
								}}
								className={`absolute ${app.isMaximized ? 'w-full h-full' : ''} ${
									app.isMinimized ? 'hidden' : ''
								}`}
								style={{ zIndex: app.zIndex }}
								onClick={() => handleStartDraggingAppWindow(app)}
							>
								<AppWindow
									app={app}
									index={index}
									handleNormalize={() => dispatch(normalizeApp(app))}
									handleMinimize={() => dispatch(minimizeApp(app))}
									handleMaximize={() => dispatch(maximizeApp(app))}
									handleClose={() => dispatch(closeApp(app))}
								/>
							</div>
						</DraggableWindowItem>
					))}
			</div>
		</DndProvider>
	);
}
