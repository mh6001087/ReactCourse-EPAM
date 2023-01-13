import {
	applyMiddleware,
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
});

export const store = configureStore(
	{ reducer: rootReducer },
	applyMiddleware(thunk)
);
