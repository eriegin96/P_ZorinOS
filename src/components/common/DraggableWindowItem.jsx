import React from 'react';
import Draggable from 'react-draggable';

export default function DraggableWindowItem({ children, onStart }) {
	const handleStop = (e) => {
		e.target.blur();
	};

	return (
		<Draggable
			bounds='parent'
			handle='.handle'
			onStart={onStart || function () {}}
			onStop={handleStop}
		>
			{children}
		</Draggable>
	);
}
