import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { ADD_AUTHOR, DELETE_AUTHOR } from '../../store/authors/types';
import { ADD_COURSE } from '../../store/courses/types';
import { store } from '../../store/rootReducer';
import AuthorItem from './components/AuthorItem/AuthorItem';

const CreateCourse = () => {
	const { authors } = useSelector((state) => state);
	const [authorsList, setAuthorList] = useState(authors.authors.result);
	const [authorName, setauthorName] = useState('');
	const dispatch = useDispatch();
	// course obj
	const [title, setTitle] = useState('');
	const [description, setDiscription] = useState('');
	const [duration, setDuration] = useState('');
	const [courseAuthorList, setcourseAuthorList] = useState([]);
	const navigate = useNavigate();

	const handleClick = (author) => {
		setcourseAuthorList((courseAuthorList) => [...courseAuthorList, author]);
		setAuthorList((prev) => {
			return [...prev.filter((item) => item.id !== author.id)];
		});
	};
	const handleDelete = (author) => {
		console.log(`author from delete author`, author);
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
		setAuthorList((authorsList) => [
			...authorsList,
			{ id: Math.random(), name: authorName },
		]);

		dispatch({
			type: ADD_AUTHOR,
			payload: { id: Math.random(), name: authorName },
		});
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
		dispatch({ type: ADD_COURSE, payload: course });
		navigate('/courses');
	};

	// store.subscribe(() => {
	// 	console.log(`From CreateCourse component`, store.getState().courses);
	// });
	const newId = shortid.generate();
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				margin: '9px',
				gap: '1rem',
				border: 3,
			}}
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
						type='text'
					/>
					<h3>Duration: {toHoursAndMinutes()}</h3>
					<Button
						buttonText={'Creat course'}
						onClick={() =>
							addCourse({
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

export default CreateCourse;
