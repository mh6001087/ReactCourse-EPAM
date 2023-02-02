import axios from 'axios';
import {
	ADD_COURSE,
	DELETE_COURSE,
	FETCH_COURSES_DATA_ERROR,
	UPDATE_COURSE,
} from './types';

export const addCourseAsync = (course) => {
	return async (dispatch) => {
		const tokenValue = localStorage.token;
		await axios
			.post('http://localhost:4000/courses/add', course, {
				headers: {
					Authorization: tokenValue,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
			.then((res) => {
				dispatch({
					type: ADD_COURSE,
					payload: res.data.result,
				});
			})
			.catch((err) => {
				dispatch({ type: FETCH_COURSES_DATA_ERROR, payload: err });
			});
	};
};

export const deleteCourseAsync = (courseId) => {
	return async (dispatch) => {
		const tokenValue = localStorage.token;
		await axios
			.delete(`http://localhost:4000/courses/${courseId}`, {
				headers: {
					Authorization: tokenValue,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
			.then(() => {
				dispatch({
					type: DELETE_COURSE,
					payload: courseId,
				});
			})
			.catch((err) => {});
	};
};

export const updateCourseAsync = (course, courseId) => {
	return async (dispatch) => {
		const tokenValue = localStorage.token;
		await axios
			.put(`http://localhost:4000/courses/${courseId}`, course, {
				headers: {
					Authorization: tokenValue,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
			.then((res) => {
				dispatch({
					type: UPDATE_COURSE,
					payload: res.data.result,
				});
			})
			.catch((err) => {
				dispatch({ type: FETCH_COURSES_DATA_ERROR, payload: err });
			});
	};
};
