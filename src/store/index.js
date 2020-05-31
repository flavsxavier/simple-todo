import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todo from './ducks/todo';

const rootReducer = combineReducers({
	todo,
});

const persistConfig = {
	key: 'todo',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
