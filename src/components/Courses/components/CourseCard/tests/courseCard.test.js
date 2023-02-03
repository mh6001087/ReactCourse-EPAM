import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { renderWithRouterAndProvider } from '../../../../../store/utils/renderWithRouterAndProvider';
import Courses from '../../../Courses';
import CourseCard from '../CourseCard';

describe('CourseCard', () => {
	const course = {
		id: 1,
		title: 'Learn React',
		description: 'React description',
		duration: '1000',
		creationDate: '27.01.2023',
		authors: [1, 2],
	};

	it('should display the title', () => {
		renderWithRouterAndProvider(<CourseCard course={course} />);
		const title = screen.getByText('Learn React');
		expect(title).toBeInTheDocument();
	});
	it('should display the description', () => {
		renderWithRouterAndProvider(<CourseCard course={course} />);
		const description = screen.getByText('React description');
		expect(description).toBeInTheDocument();
	});
	it('should display authors list', () => {
		const authorList = [
			{ id: 1, name: 'Mahmoud Hamed' },
			{ id: 2, name: 'Jader Moura' },
		];
		renderWithRouterAndProvider(
			<CourseCard course={course} authorList={authorList} />
		);
		const authors = screen.getAllByText('Mahmoud Hamed, Jader Moura');
		expect(authors[0]).toBeInTheDocument();
	});
	it('should display created date in the correct format', () => {
		renderWithRouterAndProvider(<CourseCard course={course} />);
		const creationDate = screen.getByText('27.01.2023');
		expect(creationDate).toBeInTheDocument();
	});
	it('should display duration in the correct format', () => {
		renderWithRouterAndProvider(<CourseCard course={course} />);
		const duration = screen.getByText('16:40');
		expect(duration).toBeInTheDocument();
	});
});
