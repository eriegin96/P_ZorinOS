import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';

export default function DraggableApp() {
	const {
		draggableModalType: { app, file },
	} = useContext(AppContext);

	return (
		<>
			{/* {app && (
				<Draggable handle='.handle'>
					<div className=''>app</div>
				</Draggable>
			)}
			{file && 'file'} */}
		</>
	);
}
