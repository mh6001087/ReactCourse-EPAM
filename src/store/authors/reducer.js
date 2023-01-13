import { CHANGE_AUTHORS } from './types';

let defaultState = {
	authors: [],
};

const authorsReducer = (state = defaultState, action) => {
	if (action.type === CHANGE_AUTHORS) {
		return {
			...state,
			authors: action.authors,
		};
	} else {
		return {
			...state,
		};
	}
};

export default authorsReducer;
