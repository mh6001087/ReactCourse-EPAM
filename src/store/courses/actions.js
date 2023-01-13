import { loadCoursesAsync } from '../../services';
import { ADD_COURSE, LOAD_COURSES } from './types';

const addCourse = (payload) => ({ type: ADD_COURSE, payload });

export function loadCourses() {
	return (dispatch) => {
		const courses = loadCoursesAsync(dispatch);
		console.log('from load courses function', courses);
		return dispatch({ type: LOAD_COURSES, courses: courses });
	};
}
