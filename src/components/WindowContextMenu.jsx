import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { AppContext } from '../context/AppProvider';
import { WindowContextBox } from '.';
import { calculateMenuPosition } from '../utils/calculateMenuPosition';

export default function WindowContextMenu() {
	const { contextMenuOpen, setContextMenuOpen, pointerPosition, handleContextMenu } =
		useContext(AppContext);
	const [menuPosition, setMenuPosition] = useState({});
	const [fromRight, setFromRight] = useState(false);
	const contextMenuRef = useRef();

	useLayoutEffect(() => {
		const { clientX, clientY, right, bottom } = pointerPosition;
		const { width, height } = contextMenuRef?.current?.getBoundingClientRect() ?? {
			width: 0,
			height: 0,
		};

		setMenuPosition(calculateMenuPosition(clientX, clientY, right, bottom, width, height));
		setFromRight(clientX + width >= right);
	}, [pointerPosition]);

	return (
		<>
			{contextMenuOpen && (
				<div className='overflow-x-hidden' onContextMenu={(e) => e.preventDefault()}>
					<div
						className='fixed inset-0 overflow-hidden'
						onClick={() => setContextMenuOpen(false)}
						onContextMenu={(e) => handleContextMenu(e)}
					/>

					<div style={menuPosition} className='absolute transition-opacity duration-200'>
						<WindowContextBox thisRef={contextMenuRef} fromRight={fromRight} />
					</div>
				</div>
			)}
		</>
	);
}
