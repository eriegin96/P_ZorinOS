import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import { StatusBox } from '..';

export default function Menu({ position, fromBottom, fromRight }) {
	const { menuType } = useContext(AppContext);

	return (
		<>
			{menuType && (
				<div
					className={`absolute ${fromBottom ? 'bottom-full mb-2' : 'top-full mt-2'} ${
						fromRight ? 'right-0' : 'left-0'
					} ${position}`}
				>
					{menuType === 'status' && <StatusBox />}
				</div>
			)}
		</>
	);
}
