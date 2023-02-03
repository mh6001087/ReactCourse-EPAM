import coursesReducer from '../courses/reducer';
import { ADD_COURSE } from '../courses/types';

const initialState = {
	courses: [],
};
describe('coursesRedcuer', () => {
	it('returns the initial state when no action type is matched', () => {
		const action = { type: 'UNKNOWN_ACTION_TYPE' };
		const state = coursesReducer(initialState, action);
		expect(state).toEqual(initialState);
	});

	it('should handle addcourse and return new state', () => {
		const action = {
			type: ADD_COURSE,
			payload: {
				id: 1,
				title: 'Intro to React',
				duration: 10,
			},
		};

		const expectedState = {
			courses: [
				{
					id: 1,
					title: 'Intro to React',
					duration: 10,
				},
			],
		};

		const result = coursesReducer(initialState, action);
		expect(result).toEqual(expectedState);
	});
});
