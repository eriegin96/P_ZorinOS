import React, { useContext } from 'react';
import {
	MdBattery20,
	MdBattery30,
	MdBattery50,
	MdBattery60,
	MdBattery80,
	MdBattery90,
	MdBatteryFull,
	MdBatteryCharging20,
	MdBatteryCharging30,
	MdBatteryCharging50,
	MdBatteryCharging60,
	MdBatteryCharging80,
	MdBatteryCharging90,
	MdBatteryChargingFull,
} from 'react-icons/md';
import { AppContext } from '../../context/AppProvider';

export default function Battery({ className }) {
	const { batteryLevel, isCharging } = useContext(AppContext);

	return (
		<>
			{isCharging ? (
				<span className={className}>
					{batteryLevel >= 90 && <MdBatteryChargingFull />}
					{batteryLevel >= 80 && batteryLevel < 90 && <MdBatteryCharging90 />}
					{batteryLevel >= 60 && batteryLevel < 80 && <MdBatteryCharging80 />}
					{batteryLevel >= 50 && batteryLevel < 60 && <MdBatteryCharging60 />}
					{batteryLevel >= 30 && batteryLevel < 50 && <MdBatteryCharging50 />}
					{batteryLevel >= 20 && batteryLevel < 30 && <MdBatteryCharging30 />}
					{batteryLevel >= 0 && batteryLevel < 20 && <MdBatteryCharging20 />}
				</span>
			) : (
				<span className={className}>
					{batteryLevel >= 90 && <MdBatteryFull />}
					{batteryLevel >= 80 && batteryLevel < 90 && <MdBattery90 />}
					{batteryLevel >= 60 && batteryLevel < 80 && <MdBattery80 />}
					{batteryLevel >= 50 && batteryLevel < 60 && <MdBattery60 />}
					{batteryLevel >= 30 && batteryLevel < 50 && <MdBattery50 />}
					{batteryLevel >= 20 && batteryLevel < 30 && <MdBattery30 />}
					{batteryLevel >= 0 && batteryLevel < 20 && <MdBattery20 />}
				</span>
			)}
		</>
	);
}
