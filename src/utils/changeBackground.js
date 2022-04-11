const changeBackground = () => {
	const currentTime = new Date().getHours();

	if (currentTime >= 4 && currentTime <= 5) return 'twilight';
	if (currentTime > 5 && currentTime <= 6) return 'sunrise';
	if (currentTime > 6 && currentTime <= 17) return 'day';
	if (currentTime > 17 && currentTime <= 18) return 'evening';
	if (currentTime > 18 || currentTime < 4) return 'night';
};
