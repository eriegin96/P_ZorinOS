export const calculateMenuPosition = (
	clientX,
	clientY,
	clientRight,
	clientBottom,
	width,
	height
) => {
	if (clientX + width >= clientRight && clientY + height >= clientBottom) {
		return {
			top: `${clientY - height}px`,
			left: `${clientX - width}px`,
		};
	} else if (clientX + width >= clientRight) {
		return {
			top: `${clientY}px`,
			left: `${clientX - width}px`,
		};
	} else if (clientY + height >= clientBottom) {
		return {
			top: `${clientY - height}px`,
			left: `${clientX}px`,
		};
	} else {
		return {
			top: `${clientY}px`,
			left: `${clientX}px`,
		};
	}
};
