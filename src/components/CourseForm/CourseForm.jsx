import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import shortid from 'shortid';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { addAuthorAsync } from '../../store/authors/thunk';
import { ADD_AUTHOR, DELETE_AUTHOR } from '../../store/authors/types';
import { addCourseAsync, updateCourseAsync } from '../../store/courses/thunk';
import AuthorItem from './components/AuthorItem/AuthorItem';

const CourseForm = () => {
	// const authors = useSelector((state) => state.authors);
	const authors = useSelector((state) => state.authors.authors.result);
	const [authorsList, setAuthorList] = useState(authors);
	const [authorName, setauthorName] = useState('');
	const dispatch = useDispatch();
	// course obj
	const [title, setTitle] = useState('');
	const [description, setDiscription] = useState('');
	const [duration, setDuration] = useState('');
	const [courseAuthorList, setcourseAuthorList] = useState([]);

	const navigate = useNavigate();
	const { courseId } = useParams();
	const isAddMode = !courseId;
	const location = useLocation();
	const handleClick = (author) => {
		setcourseAuthorList((courseAuthorList) => [...courseAuthorList, author]);
		setAuthorList((prev) => {
			return [...prev.filter((item) => item.id !== author.id)];
		});
	};
	const handleDelete = (author) => {
		setAuthorList((authorsList) => [...authorsList, author]);
		setcourseAuthorList((prev) => {
			return [...prev.filter((item) => item.id !== author.id)];
		});
		dispatch({ type: DELETE_AUTHOR, payload: author.id });
	};
	const onChange = (e) => {
		setauthorName(e.target.value);
	};
	const createAuthor = () => {
		// setAuthorList((authorsList) => [
		// 	...authorsList,
		// 	{ id: Math.random(), name: authorName },
		// ]);
		const author = {
			name: authorName,
		};
		dispatch(addAuthorAsync(author));
	};
	const toHoursAndMinutes = () => {
		const minutes = duration % 60;
		const hours = Math.floor(duration / 60);

		return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
	};
	const padTo2Digits = (num) => {
		return num.toString().padStart(2, '0');
	};
	const addCourse = (course) => {
		dispatch(addCourseAsync(course));
		navigate('/courses');
	};
	const newId = shortid.generate();

	useEffect(() => {
		if (!isAddMode) {
			setTitle(location.state.course.title);
			setDiscription(location.state.course.description);
			setDuration(location.state.course.duration);
			setcourseAuthorList([
				...filterArray(authorsList, location.state.course.authors),
			]);
		}
	}, []);
	function filterArray(arr1, arr2) {
		return arr1.filter((item1) => arr2.some((item2) => item1.id === item2));
	}
	const updateCourse = () => {
		const updatedCourse = {
			title: title,
			description: description,
			duration: parseInt(duration),
			authors: courseAuthorList.map((e) => e.id),
		};
		dispatch(updateCourseAsync(updatedCourse, location.state.course.id));
		navigate('/courses');
	};
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				margin: '9px',
				gap: '1rem',
				border: 3,
			}}
			data-testid='course-create-card'
		>
			<section
				style={{
					flex: 1,
					paddingRight: '15px',
				}}
			>
				<article style={{ width: '500px;' }}>
					<label>Title</label>
					<Input
						placeholder={'Enter title...'}
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						type='text'
					/>
					<label>Description</label>
					<textarea
						rows='4'
						cols='50'
						placeholder='Enter description'
						onChange={(e) => {
							setDiscription(e.target.value);
						}}
						value={description}
					></textarea>

					<h2>Add author</h2>
					<label>Author name</label>
					<Input
						placeholder={'Enter author name...'}
						type='text'
						onChange={onChange}
						value={authorName}
					/>
					<Button
						buttonText={'Creat author'}
						onClick={createAuthor}
						style={{ padding: '3px 10px', marginLeft: '10px' }}
					/>
					<h2>Duration</h2>
					<label>Duration</label>
					<Input
						placeholder={'Enter duration in minutes...'}
						onChange={(e) => {
							setDuration(e.target.value);
						}}
						value={duration}
						type='text'
					/>
					<h3>Duration: {toHoursAndMinutes()}</h3>
					<Button
						buttonText={isAddMode ? 'Add Course' : 'Edit Course'}
						onClick={() =>
							isAddMode
								? addCourse({
										title: title,
										description: description,
										creationDate: new Date().toLocaleDateString('en', {
											year: 'numeric',
											day: '2-digit',
											month: '2-digit',
										}),
										duration: parseInt(duration),
										id: newId,
										authors: courseAuthorList.map((e) => e.id),
								  })
								: updateCourse()
						}
						style={{ padding: '10px 24px', marginLeft: '10px' }}
					/>
				</article>
			</section>
			<aside
				style={{
					flex: 0.4,
					height: '165px',
					paddingLeft: '15px',
					borderleft: '1px solid #666',
				}}
			>
				<h2>Course authors</h2>
				{courseAuthorList?.length > 0 &&
					courseAuthorList.map((author) => (
						<AuthorItem
							key={author.id}
							author={author}
							btnName={'Delete author'}
							onClick={() => handleDelete(author)}
						/>
					))}
			</aside>
			<aside
				style={{
					flex: 0.4,
					height: '165px',
					paddingLeft: '15px',
					borderleft: '1px solid #666',
				}}
			>
				<h2>Authors</h2>
				{authorsList?.length > 0 &&
					authorsList.map((author) => (
						<AuthorItem
							key={author.id}
							author={author}
							btnName={'Add author'}
							onClick={() => handleClick(author)}
						/>
					))}
			</aside>
		</div>
	);
};

export default CourseForm;
