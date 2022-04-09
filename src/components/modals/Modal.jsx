import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import { StatusBox } from '..';

export default function Modal() {
	const { modalType, setModalType } = useContext(AppContext);

	return (
		<>
			{modalType && (
				<div className='fixed inset-0 overflow-hidden' onClick={() => setModalType(null)}>
					<div className='relative' onClick={(e) => e.stopPropagation()}>
						{modalType === 'status' && <StatusBox />}
					</div>
				</div>
			)}
		</>
	);
}
