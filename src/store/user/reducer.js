import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from './types';

export const userIntialState = {
	isAuth: false,
	name: '',
	email: '',
	error: null,
	token: '',
};

const userReducer = (state = userIntialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};

		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		case LOGIN_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
