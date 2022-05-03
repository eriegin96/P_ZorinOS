import React from 'react';
import { BiWindows } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { selectLayout } from '../../app/settingsSlice';
import { StartMenuIcon } from '../../assets/icons/Svg';
import { TaskbarButton } from '../common/Button';
import StatusBar from './StatusBar';

export default function Taskbar() {
	const layout = useSelector(selectLayout);

	return (
		<div
			className={`w-full flex justify-between items-center shadow-md text-sm BgTransparentColor TextColor ${
				layout === 'ubuntu' ? '' : 'h-12'
			}`}
		>
			{layout === 'window' && (
				<>
					<div className='flex gap-1'>
						<TaskbarButton>
							<StartMenuIcon className='h-6 w-6' />
						</TaskbarButton>
						<TaskbarButton>
							<BiWindows className='h-6 w-6' />
						</TaskbarButton>
						<TaskbarButton>App1</TaskbarButton>
						<TaskbarButton>App2</TaskbarButton>
						<TaskbarButton>App3</TaskbarButton>
					</div>
					<StatusBar fromBottom fromRight position='mr-1' />
				</>
			)}

			{layout === 'grid' && (
				<>
					<div className='flex gap-1'>
						<TaskbarButton>
							<CgMenuGridO className='h-6 w-6' />
						</TaskbarButton>
						<TaskbarButton>
							<BiWindows className='h-6 w-6' />
						</TaskbarButton>
					</div>
					<div className='flex gap-1'>
						<TaskbarButton>App1</TaskbarButton>
						<TaskbarButton>App2</TaskbarButton>
						<TaskbarButton>App3</TaskbarButton>
					</div>
					<StatusBar fromBottom fromRight position='mr-1' />
				</>
			)}

			{layout === 'ubuntu' && (
				<>
					<div className='flex gap-1'>
						<TaskbarButton>
							<StartMenuIcon className='h-6 w-6' />
						</TaskbarButton>
						<TaskbarButton>
							<BiWindows className='h-6 w-6' />
						</TaskbarButton>
						<TaskbarButton>App1</TaskbarButton>
						<TaskbarButton>App2</TaskbarButton>
						<TaskbarButton>App3</TaskbarButton>
					</div>
					<div className='px-2 py-1'>Sat Mar 26 9:37AM</div>
					<StatusBar fromRight position='mr-1' />
				</>
			)}
		</div>
	);
}
