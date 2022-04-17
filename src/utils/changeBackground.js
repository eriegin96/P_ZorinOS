import { BACKGROUND_LIST } from '../constants';

export const changeBackground = (currentTime) => {
	if (currentTime >= 4 && currentTime <= 5) return BACKGROUND_LIST[0].twilight;
	if (currentTime > 5 && currentTime <= 6) return BACKGROUND_LIST[0].sunrise;
	if (currentTime > 6 && currentTime <= 17) return BACKGROUND_LIST[0].day;
	if (currentTime > 17 && currentTime <= 18) return BACKGROUND_LIST[0].evening;
	if (currentTime > 18 || currentTime < 4) return BACKGROUND_LIST[0].night;
};
