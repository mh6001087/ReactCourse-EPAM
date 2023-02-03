import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	mockedState,
	mockedStore,
	renderWithRouterAndProvider,
} from '../../../store/utils/renderWithRouterAndProvider';
import CourseForm from '../../CourseForm/CourseForm';
import { PrivateRoute } from '../../PrivateComponent';
import Courses from '../Courses';

describe('Course', () => {
	it(' Courses should display amount of CourseCard equal length of courses array', async () => {
		renderWithRouterAndProvider(<Courses />);
		const courseCards = await waitFor(() =>
			screen.getAllByTestId('course-card')
		);
		expect(courseCards).toHaveLength(2);
	});
	it(' CourseForm should be shown after a click on the "Add new course" button.', async () => {
		// const history = createMemoryHistory();
		// renderWithRouterAndProvider(<Courses />);

		render(
			<BrowserRouter>
				<Provider store={mockedStore}>
					<Routes>
						<Route path='/' element={<Courses />} />
						<Route path='courses' element={<Courses />} />
						<Route
							path='courses/add'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
					</Routes>
				</Provider>
			</BrowserRouter>
		);
		const btn = screen.getByText('Add new course');
		expect(btn).toBeInTheDocument();
		const handleClick = jest.fn();
		btn.onclick = handleClick;
		fireEvent.click(btn);

		// eslint-disable-next-line no-restricted-globals
		expect(location.pathname).toBe('/courses/add');
	});
});
