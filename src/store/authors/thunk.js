import axios from 'axios';
import { ADD_AUTHOR } from './types';

export const addAuthorAsync = (author) => {
	return async (dispatch) => {
		const tokenValue = localStorage.token;
		await axios
			.post('http://localhost:4000/authors/add', author, {
				headers: {
					Authorization: tokenValue,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
			.then((res) => {
				dispatch({
					type: ADD_AUTHOR,
					payload: res.data.result,
				});
			})
			.catch((err) => {});
	};
};
