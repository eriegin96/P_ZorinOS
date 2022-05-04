import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { HiMinusSm } from 'react-icons/hi';
import { BiExpandAlt } from 'react-icons/bi';

export default function AppWindow(props) {
	const {
		app: { title, isMaximized },
		thisRef,
		onClick,
		handleMinimize,
		handleMaximize,
		handleNormalize,
		handleClose,
		isFileExplorer,
	} = props;

	return (
		<div
			className={`min-w-[500px] w-full h-full text-sm ShadowColor ${
				isMaximized ? '' : 'rounded-md'
			} BgColor TextColor`}
			ref={thisRef}
			// onClick={onClick}
			onDoubleClick={handleClose}
		>
			<div className='handle relative py-1.5 Center'>
				<span>{title}</span>
				<span className='cancel absolute right-2 flex items-center gap-1'>
					<HiMinusSm
						className='w-6 h-6 p-1 rounded-full BgColorHover TransitionColor'
						onClick={handleMinimize}
					/>
					<BiExpandAlt
						className='w-6 h-6 p-1.5 rounded-full BgColorHover TransitionColor'
						onClick={isMaximized ? handleNormalize : handleMaximize}
					/>
					<IoIosClose
						className='w-6 h-6 p-0.5 hover:text-red-500 hover:bg-red-200 rounded-full TransitionColor'
						onClick={handleClose}
					/>
				</span>
			</div>
			{[1, 2, 3, 4, 5].map((item, i) => (
				<div key={i}>{item}</div>
			))}
		</div>
	);
}
