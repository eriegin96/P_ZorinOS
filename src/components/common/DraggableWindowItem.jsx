import React from 'react';
import Draggable from 'react-draggable';

export default function DraggableWindowItem({
	children,
	position,
	defaultPosition,
	positionOffset,
	onStart,
	onStop,
}) {
	const handleStop = (e) => {
		e.target.blur();
		if (onStop) onStop(e);
	};

	return (
		<Draggable
			defaultPosition={defaultPosition}
			positionOffset={positionOffset}
			position={position}
			bounds='parent'
			handle='.handle'
			cancel='.cancel'
			onStart={onStart || function () {}}
			onStop={handleStop}
		>
			{children}
		</Draggable>
	);
}
