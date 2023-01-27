import {
	ADD_COURSE,
	DELETE_COURSE,
	FETCH_COURSES_DATA_SUCCESS,
	UPDATE_COURSE,
} from './types';

let defaultState = {
	courses: [],
};

const coursesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_COURSES_DATA_SUCCESS: {
			return {
				...state,
				courses: action.payload,
			};
		}
		case ADD_COURSE: {
			return {
				...state,
				courses: [...state.courses, action.payload],
			};
		}
		case DELETE_COURSE: {
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== action.payload),
			};
		}
		case UPDATE_COURSE:
			let updatedCourses = state.courses.map((course) => {
				if (course.id === action.payload.id) {
					return action.payload;
				}
				return course;
			});
			return {
				...state,
				courses: updatedCourses,
			};
		default:
			return state;
	}
};

export default coursesReducer;
