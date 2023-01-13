import { LOAD_COURSES } from './types';

let defaultState = {
	courses: [],
};

const coursesReducer = (state = defaultState, action) => {
	if (action.type === LOAD_COURSES) {
		console.log('hello from course reducer', action);
		return {
			...state,
			courses: action.courses,
		};
	} else {
		return {
			...state,
		};
	}
};

export default coursesReducer;
