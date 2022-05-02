import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { AppContext } from '../context/AppProvider';
import { WindowContextBox } from '.';
import { calculateMenuPosition } from '../utils/calculateMenuPosition';

export default function WindowContextMenu() {
	const { contextMenuOpen, setContextMenuOpen, pointerPosition, handleContextMenu } =
		useContext(AppContext);
	const [menuPosition, setMenuPosition] = useState({});
	const [fromRight, setFromRight] = useState(false);
	const [fromBottom, setFromBottom] = useState(false);
	const contextMenuRef = useRef();
	const boxItem1Ref = useRef();
	const boxItem2Ref = useRef();

	useLayoutEffect(() => {
		const { clientX, clientY, right, bottom } = pointerPosition;
		const { width, height } = contextMenuRef?.current?.getBoundingClientRect() ?? {
			width: 0,
			height: 0,
		};
		const { width: widthBox1 } = boxItem1Ref?.current?.getBoundingClientRect() ?? {
			width: 0,
			height: 0,
		};
		const { height: heightBox2 } = boxItem2Ref?.current?.getBoundingClientRect() ?? {
			width: 0,
			height: 0,
		};

		setMenuPosition(calculateMenuPosition(clientX, clientY, right, bottom, width, height));
		setFromRight(clientX + width + widthBox1 >= right);
		setFromBottom(clientY + height + heightBox2 >= bottom);
	}, [pointerPosition]);

	return (
		<>
			{contextMenuOpen && (
				<div
					className='overflow-x-hidden'
					onClick={() => setContextMenuOpen(false)}
					onContextMenu={(e) => handleContextMenu(e)}
				>
					<div style={menuPosition} className='absolute transition-opacity duration-200 z-20'>
						<WindowContextBox
							thisRef={contextMenuRef}
							boxItem1Ref={boxItem1Ref}
							boxItem2Ref={boxItem2Ref}
							fromRight={fromRight}
							fromBottom={fromBottom}
						/>
					</div>
				</div>
			)}
		</>
	);
}
