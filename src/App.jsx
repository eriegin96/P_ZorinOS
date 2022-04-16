import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/AppProvider';
import { LockScreen, Sidebar, Taskbar, Window, Modal, DraggableModal } from './components';
import { useSelector } from 'react-redux';
import { selectLayout } from './app/settingsSlice';

export default function App() {
	const { isLocked, bg } = useContext(AppContext);
	const layout = useSelector(selectLayout);

	return (
		<div className='min-h-screen w-full relative cursor-default select-none'>
			{/* Background */}
			<div className='absolute inset-0 -z-10'>
				<img src={bg} alt='background' className='w-full h-full' />
			</div>

			{isLocked ? (
				<LockScreen />
			) : (
				<div
					className={`absolute inset-0 flex ${
						layout === 'ubuntu' ? 'flex-col' : 'flex-col-reverse'
					}`}
				>
					<Taskbar />
					{/* <Sidebar /> */}
					<Window />
				</div>
			)}

			<Modal />
			<DraggableModal />
		</div>
	);
}
