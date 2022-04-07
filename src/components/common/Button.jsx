import React from 'react';

export default function Button({ className, children, onClick }) {
	return (
		<button
			className={`${className} rounded-md cursor-pointer Center Transition`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
