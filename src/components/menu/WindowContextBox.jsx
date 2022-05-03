import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { IoCaretForward } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeLayout,
	changeMainColor,
	selectColorset,
	selectDarkTheme,
	selectIsWindowGrid,
	selectLayout,
	selectMainColor,
	toggleDarkTheme,
	toggleWindowGrid,
} from '../../app/settingsSlice';

const layouts = [
	{ name: 'window', title: 'Window' },
	{ name: 'ubuntu', title: 'Ubuntu' },
	{ name: 'grid', title: 'Grid' },
];
const mainColors = [
	{ name: 'blue', title: 'Blue', bgImage: 'bg-gradient-blue' },
	{ name: 'green', title: 'Green', bgImage: 'bg-gradient-green' },
	{ name: 'orange', title: 'Orange', bgImage: 'bg-gradient-orange' },
	{ name: 'red', title: 'Red', bgImage: 'bg-gradient-red' },
	{ name: 'purple', title: 'Purple', bgImage: 'bg-gradient-purple' },
];

function BoxItem({ onClick, className, children }) {
	const { bgImageHover } = useSelector(selectColorset);

	return (
		<div
			className={`py-1 px-4 text-sm flex items-center gap-2 ${bgImageHover} hover:text-white ${className}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

export default function WindowContextBox({
	thisRef,
	boxItem1Ref,
	boxItem2Ref,
	fromRight,
	fromBottom,
}) {
	const dispatch = useDispatch();
	const isWindowGrid = useSelector(selectIsWindowGrid);
	const layout = useSelector(selectLayout);
	const mainColor = useSelector(selectMainColor);
	const darkTheme = useSelector(selectDarkTheme);

	return (
		<div ref={thisRef} className='Menu w-[160px]'>
			<BoxItem className='group relative'>
				<span className='grow text-xs'>View</span>
				<IoCaretForward />
				<div
					ref={boxItem1Ref}
					className={`absolute ${
						fromRight ? 'left-0 -translate-x-full' : 'left-full'
					} w-max invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 Menu`}
				>
					{layouts.map((layoutItem) => (
						<BoxItem key={layoutItem.name} onClick={() => dispatch(changeLayout(layoutItem.name))}>
							{layout === layoutItem.name ? (
								<AiOutlineCheck className='mr-1' />
							) : (
								<span className='w-[14px] mr-1' />
							)}
							<span className='text-xs'>{layoutItem.title}</span>
						</BoxItem>
					))}

					<div className='mx-4 my-2 border-b' />

					<BoxItem onClick={() => dispatch(toggleWindowGrid())}>
						{isWindowGrid ? (
							<AiOutlineCheck className='mr-1' />
						) : (
							<span className='w-[14px] mr-1' />
						)}
						<span className='text-xs'>Align icons to grid</span>
					</BoxItem>
				</div>
			</BoxItem>

			<BoxItem className='group relative'>
				<span className='grow text-xs'>Theme</span>
				<IoCaretForward />
				<div
					ref={boxItem2Ref}
					className={`absolute ${fromRight ? 'left-0 -translate-x-full' : 'left-full'}  ${
						fromBottom ? '-bottom-10' : ''
					} w-max invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 Menu`}
				>
					<BoxItem onClick={() => dispatch(toggleDarkTheme())}>
						{darkTheme ? <AiOutlineCheck className='mr-1' /> : <span className='w-[14px] mr-1' />}
						<span className='text-xs'>Dark</span>
					</BoxItem>

					<div className='mx-4 my-2 border-b' />

					{mainColors.map((color) => (
						<BoxItem key={color.name} onClick={() => dispatch(changeMainColor(color.name))}>
							<div className={`${color.bgImage} w-4 h-4 border border-white rounded-full Center`}>
								{mainColor === color.name && <AiOutlineCheck className='text-[10px] text-white' />}
							</div>
							<span className='text-xs'>{color.title}</span>
						</BoxItem>
					))}
				</div>
			</BoxItem>
			<BoxItem>
				<span className='text-xs'>Open in Terminal</span>
			</BoxItem>
			<BoxItem>
				<span className='text-xs'>Change Background...</span>
			</BoxItem>
		</div>
	);
}
