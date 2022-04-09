import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import { AppContext } from '../../context/AppProvider';

export default function DraggableModal() {
	const {
		draggableModalType: { app, file },
	} = useContext(AppContext);

	return (
		<>
			{app && (
				<Draggable handle='.handle'>
					<div className=''>app</div>
				</Draggable>
			)}
			{file && 'file'}
		</>
	);
}
