import {
	applyMiddleware,
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import thunk from 'redux-thunk';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

export const store = configureStore(
	{ reducer: rootReducer },
	applyMiddleware(thunk)
);
