import { FETCH_AUTHORS_DATA_SUCCESS } from './types';

let defaultState = {
	authors: [],
};

const authorsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_AUTHORS_DATA_SUCCESS: {
			return action.payload;
		}
		default:
			return state;
	}
};

export default authorsReducer;
