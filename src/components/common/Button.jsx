import React from 'react';

export default function Button({ className, children, ...props }) {
	return (
		<button
			className={`${className ? className : ''} rounded-md cursor-default Center Transition`}
			{...props}
		>
			{children}
		</button>
	);
}

export function WindowIconButton({ className = '', children, ...props }) {
	return (
		<Button className={`WindowIconButton flex-col ${className}`} {...props}>
			{children}
		</Button>
	);
}

export function TaskbarButton({ className = '', children, ...props }) {
	return (
		<Button className={`TaskbarButton ${className}`} {...props}>
			{children}
		</Button>
	);
}
