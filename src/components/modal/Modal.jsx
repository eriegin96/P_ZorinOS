import React, { useContext } from 'react';
import { AppContext } from '~/context/AppProvider';

export default function Modal() {
	const { modalType, setModalType } = useContext(AppContext);
	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
		setModalType(null);
	};

	return (
		<>
			{modalType && (
				<div className='fixed inset-0 overflow-hidden' onClick={() => setModalType(null)}>
					<div
						className='w-full h-full bg-transparent-b-50 flex Center'
						onClick={(e) => e.stopPropagation()}
					>
						{modalType === 'full-screen' && (
							<div className='p-4 flex flex-col bg-white rounded-md Center'>
								<div className='text-lg font-semibold text-red-500'>Enter Full-screen mode?</div>
								<div className='my-4 w-48 text-center italic text-sm'>
									Tips: Enable Full-screen mode will enhance your experience in app features
								</div>
								<div className='w-full flex justify-evenly items-center'>
									<button
										className='py-1 px-2 bg-green-400 hover:bg-green-500 active:bg-green-600 text-white font-semibold rounded-md TransitionColor'
										onClick={toggleFullscreen}
									>
										OK
									</button>
									<button
										className='py-1 px-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 font-semibold rounded-md TransitionColor'
										onClick={() => setModalType(null)}
									>
										Cancel
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}
