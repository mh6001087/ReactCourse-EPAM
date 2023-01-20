import { FETCH_COURSES_DATA_ERROR, FETCH_COURSES_DATA_SUCCESS } from './types';
import axios from 'axios';

export const fetchCoursesData = () => {
	console.log('welcome to fetchCoursesData');
	return (dispatch) => {
		axios
			.get('http://localhost:4000/courses/all')
			.then((res) => {
				dispatch({
					type: FETCH_COURSES_DATA_SUCCESS,
					payload: res.data.result,
				});
			})
			.catch((err) => {
				dispatch({ type: FETCH_COURSES_DATA_ERROR, payload: err });
			});
	};
};
