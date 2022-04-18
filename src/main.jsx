import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import store from './app/store';
import AppProvider from './context/AppProvider';
import App from './App';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppProvider>
				<DndProvider backend={HTML5Backend}>
					<App />
				</DndProvider>
			</AppProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
