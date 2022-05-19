import React from 'react';
import { useSelector } from 'react-redux';
import { selectColorset } from '~/app/settingsSlice';

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
	const { border, outline } = useSelector(selectColorset);

	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			autoFocus={autoFocus}
			className={`${className ? className : ''} ${border} ${outline} rounded-md cursor-text`}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		>
			{children}
		</input>
	);
}

export function TextArea({ className, name, cols, rows, placeholder, children, value, onChange }) {
	const { border, outline } = useSelector(selectColorset);

	return (
		<textarea
			name={name}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			className={`${className} ${border} ${outline} rounded-md cursor-text`}
			value={value}
			onChange={onChange}
		>
			{children}
		</textarea>
	);
}
