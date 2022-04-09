export const calculateBatteryRemainingTime = (batteryLevel) => {
	// burn 1% battery per 1.5 minutes
	const remainingTime = 1.5 * batteryLevel;
	const minute = Math.floor(remainingTime / 60);
	const second =
		remainingTime % 60 > 10 ? Math.round(remainingTime % 60) : `0${Math.round(remainingTime % 60)}`;

	return minute + ':' + second;
};

export const calculateBatteryToFullTime = (batteryLevel) => {
	// add 1% battery per 1.5 minutes
	const toFullTime = 1.5 * (100 - batteryLevel);
	const minute = Math.floor(toFullTime / 60);
	const second =
		toFullTime % 60 > 10 ? Math.round(toFullTime % 60) : `0${Math.round(toFullTime % 60)}`;

	return minute + ':' + second;
};
