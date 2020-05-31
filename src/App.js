import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './global.css';

import { store, persistor } from './store';

function App() {
	return (
		<main className="main-content">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AddTodo />
					<Todos />
				</PersistGate>
			</Provider>
		</main>
	);
}

export default App;
