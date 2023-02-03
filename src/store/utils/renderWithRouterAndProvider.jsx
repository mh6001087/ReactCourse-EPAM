import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
// import { mockedCoursesList, mockedAuthorsList } from '../../MockData';
const mockedState = {
	user: {
		isAuth: true,
		name: 'mock name',
		role: 'admin',
	},
	courses: {
		courses: [
			{
				id: 1,
				title: 'Learn React',
				duration: 5,
				description: 'A comperhensive course on React',
				creationDate: '2022-01-01',
				authors: [1, 2],
			},
			{
				id: 2,
				title: 'Learn Redux',
				duration: 3,
				description: 'A comperhensive course on Redux',
				creationDate: '2022-01-02',
				authors: [1, 3],
			},
		],
	},
	authors: {
		authors: {
			result: [
				{ id: 1, name: 'Mahmoud Hamed' },
				{ id: 2, name: 'Jader Moura' },
			],
		},
	},
};
export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
export const renderWithRouterAndProvider = (component) => {
	const history = createMemoryHistory();
	return render(
		<MemoryRouter history={history}>
			<Provider store={mockedStore}>{component}</Provider>
		</MemoryRouter>
	);
};
