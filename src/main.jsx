import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import AppProvider from './context/AppProvider';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppProvider>
				<App />
			</AppProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
