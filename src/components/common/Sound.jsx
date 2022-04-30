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
	const mainColor = useSelector(selectMainColor);
	const { bg, border } = useSelector(selectColorset);
	console.log(border);

	return (
		<ReactSlider
			className={`h-1 w-[170px] rounded-full ${className}`}
			defaultValue={volume}
			onChange={(value) => {
				dispatch(changeVolume(value));
			}}
			renderTrack={(props, state) => (
				<div
					{...props}
					// ? `${mainColor === 'blue' ? 'bg-blue-dark ' : ''}${
					// 		mainColor === 'green' ? 'bg-green-dark ' : ''
					//   }${mainColor === 'red' ? 'bg-red-dark ' : ''}${
					// 		mainColor === 'orange' ? 'bg-orange-dark  ' : ''
					//   }${mainColor === 'purple' ? 'bg-purple-dark' : ''}`
					bg
					className={`inset-y-0 rounded-full ${state.index === 0 ? bg : 'bg-gray-300'}`}
					index={state.index}
				/>
			)}
			renderThumb={(props) => (
				// ${mainColor === 'blue' ? 'border-blue-dark ' : ''}${
				// 					mainColor === 'green' ? 'border-green-dark ' : ''
				// 				}${mainColor === 'red' ? 'border-red-dark ' : ''}${
				// 					mainColor === 'orange' ? 'border-orange-dark  ' : ''
				// 				}${mainColor === 'purple' ? 'border-purple-dark' : ''}
				<div
					{...props}
					className={`-top-1.5 h-4 w-4 border-2 ${border} bg-white rounded-full cursor-pointer outline-none`}
				/>
			)}
		/>
	);
}
