import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './global.css';

import store from './store';

function App() {
	return (
		<main className="main-content">
			<Provider store={store}>
				<AddTodo />
				<Todos />
			</Provider>
		</main>
	);
}

export default App;
