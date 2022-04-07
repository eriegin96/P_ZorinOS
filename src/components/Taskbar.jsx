import React from 'react';

export default function Taskbar() {
	return (
		<div className='w-full absolute flex justify-between items-center shadow-md text-white bg-black text-sm'>
			<div className='px-3 py-1'>Activities</div>
			<div className='px-2 py-1'>Sat Mar 26 9:37AM</div>
			<div>{/* <img src={wifiGoodIcon} /> */}</div>
		</div>
	);
}
