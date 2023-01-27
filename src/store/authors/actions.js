import { FETCH_AUTHORS_DATA_ERROR, FETCH_AUTHORS_DATA_SUCCESS } from './types';
import axios from 'axios';

export const fetchAuthorsData = () => {
	return async (dispatch) => {
		await axios
			.get('http://localhost:4000/authors/all')
			.then((res) => {
				dispatch({ type: FETCH_AUTHORS_DATA_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_AUTHORS_DATA_ERROR, payload: err });
			});
	};
};
