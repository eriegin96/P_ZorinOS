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

export default function Battery({ batteryLevel, isCharging }) {
	if (isCharging) {
		if (batteryLevel >= 90) return <MdBatteryChargingFull />;
		if (batteryLevel >= 80 && batteryLevel < 90) return <MdBatteryCharging90 />;
		if (batteryLevel >= 60 && batteryLevel < 80) return <MdBatteryCharging80 />;
		if (batteryLevel >= 50 && batteryLevel < 60) return <MdBatteryCharging60 />;
		if (batteryLevel >= 30 && batteryLevel < 50) return <MdBatteryCharging50 />;
		if (batteryLevel >= 20 && batteryLevel < 30) return <MdBatteryCharging30 />;
		if (batteryLevel >= 0 && batteryLevel < 20) return <MdBatteryCharging20 />;
	} else {
		if (batteryLevel >= 90) return <MdBatteryFull />;
		if (batteryLevel >= 80 && batteryLevel < 90) return <MdBattery90 />;
		if (batteryLevel >= 60 && batteryLevel < 80) return <MdBattery80 />;
		if (batteryLevel >= 50 && batteryLevel < 60) return <MdBattery60 />;
		if (batteryLevel >= 30 && batteryLevel < 50) return <MdBattery50 />;
		if (batteryLevel >= 20 && batteryLevel < 30) return <MdBattery30 />;
		if (batteryLevel >= 0 && batteryLevel < 20) return <MdBattery20 />;
	}
}
