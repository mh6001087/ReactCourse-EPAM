import { ADD_AUTHOR, CHANGE_AUTHORS } from './types';

const addAuthor = (payload) => ({ type: ADD_AUTHOR, payload });

export function loadAuthors(authors) {
	return {
		type: CHANGE_AUTHORS,
		authors: authors,
	};
}
