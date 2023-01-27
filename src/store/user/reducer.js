import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, UPDATE_ROLE } from './types';

export const userIntialState = {
	isAuth: false,
	name: '',
	email: '',
	error: null,
	token: '',
	role: '', // new value
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
				role: action.payload.role,
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

		case UPDATE_ROLE:
			return {
				...state,
				role: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
