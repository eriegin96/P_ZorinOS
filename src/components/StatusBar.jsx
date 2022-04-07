import React, { useState, useContext, useEffect } from 'react';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeMute } from 'react-icons/io';
import { IoCaretDown } from 'react-icons/io5';
import { AppContext } from '../context/AppProvider';
import Battery from './common/Battery';

export default function StatusBar() {
	const { darkTheme, setDarkTheme } = useContext(AppContext);
	const [isBatteryCharging, setIsBatteryCharging] = useState(false);
	const [batteryLevel, setBatteryLevel] = useState(100);

	useEffect(() => {
		navigator.getBattery &&
			navigator.getBattery().then((battery) => {
				const updateChargeInfo = () => {
					battery.charging ? setIsBatteryCharging(true) : setIsBatteryCharging(false);
				};
				const updateLevelInfo = () => {
					setBatteryLevel(battery.level * 100);
				};
				const updateAllBatteryInfo = () => {
					updateChargeInfo();
					updateLevelInfo();
				};

				battery.addEventListener('chargingchange', () => {
					updateChargeInfo();
				});
				battery.addEventListener('levelchange', () => {
					updateLevelInfo();
				});

				updateAllBatteryInfo();
			});
	}, []);

	return (
		<>
			<div
				className='text-white dark:text-black bg-transparent-w-10 hover:bg-transparent-w-30 rounded-lg mt-0.5 mr-0.5 px-2 py-1 cursor-pointer Center Transition'
				onClick={(e) => {
					e.stopPropagation();
					setDarkTheme(!darkTheme);
				}}
			>
				<VscDebugDisconnect className='mr-0.5' />
				<IoMdVolumeHigh className='ml-0.5 mr-1' />
				<Battery batteryLevel={batteryLevel} isCharging={isBatteryCharging} />
				<IoCaretDown className='ml-1' />
			</div>
		</>
	);
}
