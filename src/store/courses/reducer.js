import { FETCH_COURSES_DATA_SUCCESS } from './types';

let defaultState = {
	courses: [],
};

const coursesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_COURSES_DATA_SUCCESS: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default coursesReducer;
