import React, { useState, useContext, useEffect } from 'react';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { IoMdVolumeHigh } from 'react-icons/io';
import { IoCaretDown } from 'react-icons/io5';
import { AppContext } from '../context/AppProvider';
import Battery from './common/Battery';

export default function StatusBar() {
	const { darkTheme, setDarkTheme, modalType, setModalType } = useContext(AppContext);

	return (
		<>
			<div
				className={`text-white dark:text-black hover:bg-transparent-w-10 rounded-lg mt-1 mr-1 px-2 py-1 cursor-pointer Center ${
					modalType === 'status' ? 'bg-transparent-w-20' : ''
				}`}
				onClick={(e) => {
					e.stopPropagation();
					setDarkTheme(!darkTheme);
					setModalType('status');
				}}
			>
				<VscDebugDisconnect className='mr-0.5' />
				<IoMdVolumeHigh className='mx-0.5' />
				<Battery className='mx-0.5 Center' />
				<IoCaretDown className='ml-0.5' />
			</div>
		</>
	);
}
