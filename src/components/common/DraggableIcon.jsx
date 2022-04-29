import React, { useContext, useRef } from 'react';
import Draggable from 'react-draggable';

export default function DraggableIcon({ children, onStart }) {
	const handleStop = (e) => {
		e.target.blur();
	};

	return (
		<Draggable handle='.handle' onStart={onStart || function () {}} onStop={handleStop}>
			{children}
		</Draggable>
	);
}
