import React, { useState } from 'react';
import { default as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar() {
	const [value, onChange] = useState(new Date());

	return (
		<div>
			<ReactCalendar onChange={onChange} value={value} />
		</div>
	);
}
