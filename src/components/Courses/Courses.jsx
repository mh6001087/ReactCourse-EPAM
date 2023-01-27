import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { fetchCoursesData } from '../../store/courses/actions';
import { store } from '../../store/rootReducer';
import CourseCard from '../Courses/components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchAuthorsData } from '../../store/authors/actions';

const Courses = () => {
	const dispatch = useDispatch();
	const { authors } = useSelector((state) => state);
	const courses = useSelector((state) => state.courses);
	// const [filteredCourses, setFilteredCourses] = useState([]);
	// const [filteredKeyword, setFilteredKeyword] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchAuthorsData());
	}, [dispatch]);

	useEffect(() => {
		if (courses.courses.length === 0) {
			dispatch(fetchCoursesData());
		}
	}, [dispatch, courses]);
	// useEffect(() => {
	// 	if (courses.length > 0) {
	// 		const filteredData = courses?.filter((course) =>
	// 			course.title.toLowerCase().includes(filteredKeyword)
	// 		);
	// 		setFilteredCourses(filteredData);
	// 	}
	// }, [courses, filteredKeyword]);

	// const handleFilterChange = (e) => {
	// 	setFilteredKeyword(e);
	// };
	//here we filter the list where the title(or any element of data) is equal to input value
	const searchChange = (e) => {
		return courses.filter(
			(element) =>
				element.title.toLowerCase().includes(e.toLowerCase()) ||
				element.id.toLowerCase().includes(e.toLowerCase())
		);
		//here we set the filtered list to result
		//setCourses(searchResult);
	};
	return (
		<>
			<SearchBar onChange={searchChange} />
			<Button
				onClick={() => navigate('/courses/add')}
				buttonText='Add new course'
				style={{ padding: '10px 24px', marginLeft: '10px' }}
			/>
			{courses.courses?.length > 0 &&
				courses.courses.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						authorList={authors.authors.result}
					/>
				))}
		</>
	);
};
export default Courses;
