import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import CourseCard from '../Courses/components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = ({ courseList, authorList, setCourse }) => {
	//here is where we keep search result
	const [result, setResult] = useState(courseList);
	console.log(setCourse);
	//here we filter the list where the title(or any element of data) is equal to input value
	const searchChange = (e) => {
		const searchResult = courseList.filter(
			(element) =>
				element.title.toLowerCase().includes(e.toLowerCase()) ||
				element.id.toLowerCase().includes(e.toLowerCase())
		);
		//here we set the filtered list to result
		setResult(searchResult);
	};
	return (
		<>
			<SearchBar onChange={searchChange} />
			<Button
				handleMyClick={() => setCourse(true)}
				buttonText='Add new course'
				style={{ padding: '10px 24px', marginLeft: '10px' }}
			/>

			{result?.length > 0 &&
				result.map((course) => (
					<CourseCard key={course.id} course={course} authorList={authorList} />
				))}
		</>
	);
};

export default Courses;
