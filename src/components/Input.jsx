import React, { useContext } from 'react';
import { AppContext } from '../context/AppProvider';

export default function Input(props) {
	const {
		type = 'text',
		className,
		name,
		placeholder,
		autoFocus,
		children,
		value,
		onChange,
		onKeyDown,
	} = props;
	const { color } = useContext(AppContext);

	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			autoFocus={autoFocus}
			className={`${className} ${color.border} ${color.outline} rounded-md cursor-text`}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		>
			{children}
		</input>
	);
}

export function TextArea({ className, name, cols, rows, placeholder, children, value, onChange }) {
	return (
		<textarea
			name={name}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			className={`${className} ${color.border} ${color.outline} rounded-md cursor-text`}
			value={value}
			onChange={onChange}
		>
			{children}
		</textarea>
	);
}
