import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
	changeBatteryLevel,
	selectBatteryLevel,
	selectIsCharging,
	toggleCharging,
} from '../../app/settingsSlice';

export default function Battery({ className }) {
	const batteryLevel = useSelector(selectBatteryLevel);
	const isCharging = useSelector(selectIsCharging);
	const dispatch = useDispatch();

	useEffect(() => {
		navigator.getBattery &&
			navigator.getBattery().then((battery) => {
				const updateChargeInfo = () => {
					battery.charging ? dispatch(toggleCharging(true)) : dispatch(toggleCharging(false));
				};
				const updateLevelInfo = () => {
					dispatch(changeBatteryLevel(Math.round(battery.level * 100)));
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
