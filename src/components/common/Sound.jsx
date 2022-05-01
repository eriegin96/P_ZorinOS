import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSlider from 'react-slider';
import {
	selectVolume,
	changeVolume,
	selectMainColor,
	selectColorset,
} from '../../app/settingsSlice';

export default function Sound({ className }) {
	const volume = useSelector(selectVolume);
	const dispatch = useDispatch();
	const { bg, border } = useSelector(selectColorset);

	return (
		<ReactSlider
			className={`h-1 w-[170px] rounded-full ${className ? className : ''}`}
			defaultValue={volume}
			onChange={(value) => {
				dispatch(changeVolume(value));
			}}
			renderTrack={(props, state) => (
				<div
					{...props}
					className={`inset-y-0 rounded-full ${state.index === 0 ? bg : 'bg-gray-300'}`}
					index={state.index}
				/>
			)}
			renderThumb={(props) => (
				<div
					{...props}
					className={`-top-1.5 h-4 w-4 border-2 ${border} rounded-full cursor-pointer outline-none BgColor`}
				/>
			)}
		/>
	);
}
