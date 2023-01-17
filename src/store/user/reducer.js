import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from './types';

const userIntialState = {
	isAuth: false,
	name: '',
	email: '',
	error: null,
};

const userReducer = (state = userIntialState, action) => {
	console.log(`action.payload`, action);
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
			};

		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
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
