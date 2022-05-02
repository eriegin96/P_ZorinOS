import React, { useContext, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp, openApp, selectRunningApps } from '../app/runningAppsSlice';
import { selectIsWindowGrid } from '../app/settingsSlice';
import { APP_LIST } from '../constants/apps';
import { AppContext } from '../context/AppProvider';
import { WindowIconButton, DraggableWindowItem } from '.';

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

	const handleStartDraggingAppWindow = (index) => {
		const newZIndex = 10 + runningApps.length - 1;

		appRefs.current.map((a) => {
			const eachAppZIndex = parseInt(a?.style?.zIndex);
			if (eachAppZIndex > parseInt(appRefs?.current[index]?.style?.zIndex))
				a.style.zIndex = (eachAppZIndex - 1).toString();
		});

		appRefs.current[index].style.zIndex = newZIndex.toString();
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div
				id='window'
				className='relative overflow-hidden p-1 grow text-white grid grid-cols-16 grid-rows-7 grid-flow-col'
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
								className='handle justify-self-center py-1 px-2 flex flex-col items-center rounded-md cursor-default WindowIconButton Transition-colors'
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
				{runningApps.map((app, index) => (
					<DraggableWindowItem
						key={'app-' + app.name}
						onStart={() => handleStartDraggingAppWindow(index)}
					>
						<div
							className='handle absolute left-1/2 top-1/2 text-black w-20 h-10 bg-white border-2 border-red-500'
							style={{ zIndex: 10 + index }}
							ref={(el) => {
								appRefs.current[index] = el;
							}}
							onClick={() => handleStartDraggingAppWindow(index)}
							onDoubleClick={() => dispatch(closeApp(app))}
						>
							{app.title}
						</div>
					</DraggableWindowItem>
				))}
			</div>
		</DndProvider>
	);
}
