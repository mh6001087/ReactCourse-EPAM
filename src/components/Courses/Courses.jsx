import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { fetchCoursesData } from '../../store/courses/actions';
import { store } from '../../store/rootReducer';
import CourseCard from '../Courses/components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchAuthorsData } from '../../store/authors/actions';

const Courses = () => {
	const dispatch = useDispatch();
	const { courses } = useSelector((state) => state.courses);
	//here is where we keep search result
	const [result, setResult] = useState(mockedCoursesList);
	const navigate = useNavigate();
	//here we filter the list where the title(or any element of data) is equal to input value
	const searchChange = (e) => {
		const searchResult = mockedCoursesList.filter(
			(element) =>
				element.title.toLowerCase().includes(e.toLowerCase()) ||
				element.id.toLowerCase().includes(e.toLowerCase())
		);
		//here we set the filtered list to result
		setResult(searchResult);
	};

	useEffect(() => {
		dispatch(fetchAuthorsData());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCoursesData());
	}, [dispatch]);

	store.subscribe(() => {
		console.log(`From courses component`, store.getState());
	});

	return (
		<>
			<SearchBar onChange={searchChange} />
			<Button
				onClick={() => navigate('/courses/add')}
				buttonText='Add new course'
				style={{ padding: '10px 24px', marginLeft: '10px' }}
			/>

			{result?.length > 0 &&
				result.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						authorList={mockedAuthorsList}
					/>
				))}
		</>
	);
};
export default Courses;
