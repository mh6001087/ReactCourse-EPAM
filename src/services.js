import axios from 'axios';
import { loadAuthors } from './store/authors/actions';
import { loadCourses } from './store/courses/actions';

export function loadCoursesAsync() {
	return async (dispatch) => {
		await axios
			.get('http://localhost:4000/courses/all')
			.then((response) => {
				console.log(`loadCoursesAsync`, response.result);
				// response.result is the array of courses
				dispatch(loadCourses(response.result));
			})
			.catch((error) => {
				// error.message is the error description
				console.log(`Error`, error);
			});
	};
}
export async function loadAuthorsAsync() {
	return (dispatch) => {
		return axios.get('http://localhost:4000/authors/all').then((response) => {
			dispatch(loadAuthors(response.result));
		});
	};
}
