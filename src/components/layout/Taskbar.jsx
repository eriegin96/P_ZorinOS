import React from 'react';
import { BiWindows } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import {
	maximizeApp,
	minimizeApp,
	normalizeApp,
	selectRunningApps,
} from '../../app/runningAppsSlice';
import { selectLayout } from '../../app/settingsSlice';
import { StartMenuIcon } from '../../assets/icons/Svg';
import { TaskbarButton } from '../common/Button';
import StatusBar from './StatusBar';

export default function Taskbar() {
	const dispatch = useDispatch();
	const layout = useSelector(selectLayout);
	const minimizedRunningApps = useSelector(selectRunningApps);

	const reOpenApp = (app) => {
		if (app.isMinimized) {
			if (app.isMaximized) {
				dispatch(maximizeApp(app));
			} else {
				dispatch(normalizeApp(app));
			}
		} else {
			dispatch(minimizeApp(app));
		}
	};

	return (
		<div
			className={`w-full flex justify-between items-center shadow-md text-sm BgTransparentColor TextColor ${
				layout === 'ubuntu' ? '' : 'h-12'
			}`}
		>
			<div className='flex gap-1'>
				<TaskbarButton>
					{layout === 'grid' ? (
						<CgMenuGridO className='h-6 w-6' />
					) : (
						<StartMenuIcon className='h-6 w-6' />
					)}
				</TaskbarButton>
				<TaskbarButton>
					<BiWindows className='h-6 w-6' />
				</TaskbarButton>
				{minimizedRunningApps
					.filter((app) => app.isOpen)
					.map((app) => (
						<TaskbarButton key={app.name} onClick={() => reOpenApp(app)}>
							<img
								src={app.icon}
								alt={app.title}
								className='relative h-6 w-6 pointer-events-none'
							/>
							<span className='absolute bottom-2 h-1 w-1 bg-blue-500 rounded-full' />
						</TaskbarButton>
					))}
			</div>
			{layout === 'ubuntu' && <div className='px-2 py-1'>Sat Mar 26 9:37AM</div>}
			<StatusBar fromRight fromBottom={layout !== 'ubuntu'} position='mr-1' />
		</div>
	);
}
