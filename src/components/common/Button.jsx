import React from 'react';

export default function Button({ className, children, onClick }) {
	return (
		<button
			className={`${className ? className : ''} rounded-md cursor-default Center Transition`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export function TaskbarButton({ className, children, onClick }) {
	return (
		<Button className={`TaskbarButton ${className}`} onClick={onClick}>
			{children}
		</Button>
	);
}
