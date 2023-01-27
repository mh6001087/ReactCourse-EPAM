import { ADD_AUTHOR, DELETE_AUTHOR, FETCH_AUTHORS_DATA_SUCCESS } from './types';

let defaultState = {
	authors: [],
};

const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_AUTHORS_DATA_SUCCESS: {
			return { ...state, authors: action.payload };
		}
		case ADD_AUTHOR: {
			return {
				...state,
				authors: [...state.authors.result, action.payload],
			};
		}
		case DELETE_AUTHOR: {
			return {
				...state,
				authors: state.authors.result.filter(
					(author) => author.id !== action.payload
				),
			};
		}
		default:
			return state;
	}
};

export default authorsReducer;
