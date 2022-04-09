import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import { AppContext } from '../../context/AppProvider';

export default function Sound({ className }) {
	const { volume, setVolume } = useContext(AppContext);

	return (
		<>
			<ReactSlider
				className={`h-1 w-[170px] rounded-full ${className}`}
				defaultValue={volume}
				onChange={(value) => {
					setVolume(value);
				}}
				renderTrack={(props, state) => (
					<div
						{...props}
						className={`inset-y-0 rounded-full ${
							state.index === 0 ? 'bg-blue-400' : 'bg-gray-300'
						}`}
						index={state.index}
					/>
				)}
				renderThumb={(props) => (
					<div
						{...props}
						className='-top-1.5 h-4 w-4 border-2 border-blue-400 bg-white rounded-full cursor-pointer outline-none'
					/>
				)}
			/>
		</>
	);
}
