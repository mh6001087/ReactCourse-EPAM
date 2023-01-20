import axios from 'axios';
import { LOGIN_ERROR, LOGIN_SUCCESS } from './types';

export const loginAsync = (_email, password) => async (dispatch) => {
	try {
		const res = await axios.post('http://localhost:4000/login', {
			email: _email,
			password: password,
		});
		// Extract the token from the response
		const token = res.data.result;
		const name = res.data.user.name;
		const email = res.data.user.email;
		dispatch({ type: LOGIN_SUCCESS, payload: { token, name, email } });
	} catch (err) {
		// Handle the error
		dispatch({ type: LOGIN_ERROR, payload: err });
	}
};
