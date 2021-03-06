import React, { useContext, useState } from 'react';
import { IoMdVolumeHigh } from 'react-icons/io';
import { IoCaretForward, IoCaretDown } from 'react-icons/io5';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { MdSettings, MdLock, MdPowerSettingsNew } from 'react-icons/md';
import { Battery, Sound } from '../';
import { calculateBatteryRemainingTime, calculateBatteryToFullTime } from '~/utils';
import { useSelector } from 'react-redux';
import { selectBatteryLevel, selectIsCharging, selectColorset } from '~/app/settingsSlice';
import { AppContext } from '~/context/AppProvider';

function StatusItem({ open, disabled, onClick, children }) {
	const { bgImage, bgImageHover } = useSelector(selectColorset);

	return (
		<div
			className={`py-1 px-4 text-sm flex items-center gap-2 BgColorHover ${
				disabled ? 'text-gray-400 hover:bg-inherit' : ''
			} ${open ? `${bgImage} ${bgImageHover} text-white` : ''}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

function SubItem({ children, onClick }) {
	return (
		<div className='py-1 pl-9 BgColorHover BgColor TextColor' onClick={onClick}>
			{children}
		</div>
	);
}

export default function StatusBox() {
	const { isLocked, setIsLocked } = useContext(AppContext);
	const batteryLevel = useSelector(selectBatteryLevel);
	const isCharging = useSelector(selectIsCharging);
	const initialShowSubItem = { connection: false, battery: false, power: false };
	const [showSubItem, setShowSubItem] = useState(initialShowSubItem);

	return (
		<div className='Menu'>
			<StatusItem>
				<IoMdVolumeHigh />
				<div>
					<Sound />
				</div>
			</StatusItem>

			<div className='mx-4 my-2 border-b' />

			<StatusItem
				open={showSubItem.connection}
				disabled={isLocked}
				onClick={() =>
					setShowSubItem({ ...initialShowSubItem, connection: !showSubItem.connection })
				}
			>
				<VscDebugDisconnect />
				<span className='grow text-xs'>Wired Connected</span>
				<span className='Center'>
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
				<Battery className='Center' />
				{isCharging ? (
					<span className='grow text-xs'>
						{calculateBatteryToFullTime(batteryLevel)} Unti Full ({batteryLevel}%)
					</span>
				) : (
					<span className='grow text-xs'>
						{calculateBatteryRemainingTime(batteryLevel)} Remaining ({batteryLevel}%)
					</span>
				)}
				<span className='Center'>
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
						<MdSettings />
						<span className='grow text-xs'>Settings</span>
					</StatusItem>
					<StatusItem>
						<MdLock />
						<span className='grow text-xs'>Lock</span>
					</StatusItem>
				</>
			)}

			<StatusItem
				open={showSubItem.power}
				onClick={() => setShowSubItem({ ...initialShowSubItem, power: !showSubItem.power })}
			>
				<MdPowerSettingsNew />
				<span className='grow text-xs'>Power Off / Log Out</span>
				<span className='Center'>{showSubItem.power ? <IoCaretDown /> : <IoCaretForward />}</span>
			</StatusItem>

			{showSubItem.power && (
				<div className='basis-full text-xs BgColor TextColor'>
					<SubItem>Suspend</SubItem>
					{!isLocked && (
						<>
							<SubItem>Restart...</SubItem>
							<SubItem>Power Off...</SubItem>
							<div className='mx-4 my-2 border-b' />
							<SubItem onClick={() => setIsLocked(true)}>Log Out</SubItem>
						</>
					)}
				</div>
			)}
		</div>
	);
}
