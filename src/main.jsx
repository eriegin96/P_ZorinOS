import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './context/AppProvider';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
