import React, { useContext } from 'react';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { IoMdVolumeHigh } from 'react-icons/io';
import { IoCaretDown } from 'react-icons/io5';
import { AppContext } from '../context/AppProvider';
import Battery from './common/Battery';
import Menu from './common/Menu';

export default function StatusBar({ position, fromBottom, fromRight }) {
	const { darkTheme, setDarkTheme, menuType, setMenuType } = useContext(AppContext);

	return (
		<div className='relative'>
			<div
				className={`text-white dark:text-black hover:bg-transparent-w-10 rounded-lg px-2 py-1 Center ${
					menuType === 'status' ? 'bg-transparent-w-20' : ''
				} ${position}`}
				onClick={(e) => {
					e.stopPropagation();
					setDarkTheme(!darkTheme);
					setMenuType('status');
				}}
			>
				<VscDebugDisconnect className='mr-0.5' />
				<IoMdVolumeHigh className='mx-0.5' />
				<Battery className='mx-0.5 Center' />
				<IoCaretDown className='ml-0.5' />
			</div>
			<Menu position={position} fromBottom={fromBottom} fromRight={fromRight} />
		</div>
	);
}
