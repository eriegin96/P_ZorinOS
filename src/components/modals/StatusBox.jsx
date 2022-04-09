import React, { useContext, useState } from 'react';
import { IoMdVolumeHigh } from 'react-icons/io';
import { IoCaretForward, IoCaretDown } from 'react-icons/io5';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { MdSettings, MdLock, MdPowerSettingsNew } from 'react-icons/md';
import { Battery, Sound } from '..';
import { AppContext } from '../../context/AppProvider';
import {
	calculateBatteryRemainingTime,
	calculateBatteryToFullTime,
} from '../../utils/calculateTime';

function StatusItem({ open, disabled, onClick, children }) {
	return (
		<div
			className={`py-1 px-4 text-sm flex items-center flex-wrap hover:bg-gray-200 ${
				disabled ? 'text-gray-400 hover:bg-inherit' : ''
			} ${open ? 'bg-gradient-blue hover:bg-gradient-blue text-white' : ''}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

function SubItem({ children }) {
	return <div className='py-1 pl-9 bg-white hover:bg-gray-200'>{children}</div>;
}

export default function StatusBox() {
	const { isLocked, batteryLevel, isCharging } = useContext(AppContext);
	const initialShowSubItem = { connection: false, battery: false, power: false };
	const [showSubItem, setShowSubItem] = useState(initialShowSubItem);

	return (
		<div className='absolute top-9 right-1 py-2 bg-white-main rounded-lg'>
			<StatusItem>
				<IoMdVolumeHigh className='mr-2' />
				<Sound />
			</StatusItem>

			<div className='mx-4 my-2 border-b' />

			<StatusItem
				open={showSubItem.connection}
				disabled={isLocked}
				onClick={() =>
					setShowSubItem({ ...initialShowSubItem, connection: !showSubItem.connection })
				}
			>
				<VscDebugDisconnect className='mr-2' />
				<span className='grow text-xs'>Wired Connected</span>
				<span className='ml-2 Center'>
					{!isLocked && (showSubItem.connection ? <IoCaretDown /> : <IoCaretForward />)}
				</span>
			</StatusItem>
			{showSubItem.connection && (
				<div className='basis-full bg-white text-black text-xs'>
					<SubItem>Turn Off</SubItem>
					<SubItem>Wire Settings</SubItem>
				</div>
			)}
			<StatusItem
				open={showSubItem.battery}
				disabled={isLocked}
				onClick={() => setShowSubItem({ ...initialShowSubItem, battery: !showSubItem.battery })}
			>
				<Battery className='mr-2 Center' />
				{isCharging ? (
					<span className='grow text-xs'>
						{calculateBatteryToFullTime(batteryLevel)} Unti Full ({batteryLevel}%)
					</span>
				) : (
					<span className='grow text-xs'>
						{calculateBatteryRemainingTime(batteryLevel)} Remaining ({batteryLevel}%)
					</span>
				)}
				<span className='ml-2 Center'>
					{!isLocked && (showSubItem.battery ? <IoCaretDown /> : <IoCaretForward />)}
				</span>
			</StatusItem>
			{showSubItem.battery && (
				<div className='basis-full bg-white text-black text-xs'>
					<SubItem>Power Settings</SubItem>
				</div>
			)}

			<div className='mx-4 my-2 border-b' />

			{!isLocked && (
				<>
					<StatusItem>
						<MdSettings className='mr-2' />
						<span className='grow text-xs'>Settings</span>
					</StatusItem>
					<StatusItem>
						<MdLock className='mr-2' />
						<span className='grow text-xs'>Lock</span>
					</StatusItem>
				</>
			)}

			<StatusItem
				open={showSubItem.power}
				onClick={() => setShowSubItem({ ...initialShowSubItem, power: !showSubItem.power })}
			>
				<MdPowerSettingsNew className='mr-2' />
				<span className='grow text-xs'>Power Off / Log Out</span>
				<span className='ml-2 Center'>
					{showSubItem.power ? <IoCaretDown /> : <IoCaretForward />}
				</span>
			</StatusItem>
			{showSubItem.power && (
				<div className='basis-full bg-white text-black text-xs'>
					<SubItem>Suspend</SubItem>
					{!isLocked && (
						<>
							<SubItem>Restart...</SubItem>
							<SubItem>Power Off...</SubItem>
							<div className='mx-4 my-2 border-b' />
							<SubItem>Log Out</SubItem>
						</>
					)}
				</div>
			)}
		</div>
	);
}
