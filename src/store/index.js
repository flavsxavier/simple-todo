import { combineReducers, createStore } from 'redux';

import todo from './ducks/todo';

const reducers = combineReducers({
	todo,
});

const store = createStore(reducers);

export default store;
