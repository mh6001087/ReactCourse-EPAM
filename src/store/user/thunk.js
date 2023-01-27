import axios from 'axios';
import { LOGOUT, UPDATE_ROLE } from './types';

export const logoutAsync = (token) => async (dispatch) => {
	try {
		await axios.delete('http://localhost:4000/logout', {
			headers: { Authorization: token },
		});
		dispatch({ type: LOGOUT });
	} catch (err) {
		// Handle the error
	}
};

export const getUserMe = (token) => async (dispatch) => {
	try {
		const userInfo = await axios.get('http://localhost:4000/users/me', {
			headers: { Authorization: token },
		});
		const role = userInfo?.data?.result.role;
		dispatch({ type: UPDATE_ROLE, payload: role });
	} catch (err) {
		// Handle the error
	}
};
