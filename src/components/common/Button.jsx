import React, { useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export default function Button({ className = '', children, ...props }) {
	return (
		<button className={`Button ${className}`} {...props}>
			{children}
		</button>
	);
}

export function WindowIconButton({
	id,
	index,
	moveIcon,
	icon,
	title,
	className = '',
	children,
	onDoubleClick,
	...props
}) {
	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: 'icon',
		collect: (monitor) => ({
			handlerId: monitor.getHandlerId(),
		}),
		hover: (item, monitor) => {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveIcon(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		type: 'icon',
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(drop(ref));

	return (
		<button
			ref={ref}
			type='button'
			data-handler-id={handlerId}
			className={`py-1 px-2 flex flex-col items-center rounded-md cursor-default WindowIconButton Transition-colors ${
				isDragging ? 'opacity-50' : 'opacity-100'
			} ${className}`}
			{...props}
			onDoubleClick={onDoubleClick}
		>
			{children}
		</button>
	);
}

export function TaskbarButton({ className = '', children, ...props }) {
	return (
		<button className={`Button TaskbarButton ${className}`} {...props}>
			{children}
		</button>
	);
}
