import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import ProtoTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_COURSE } from '../../../../store/courses/types';
const CourseCard = ({ course, authorList }) => {
	const dispatch = useDispatch();

	// style
	const courseCardStyle = {
		border: '2px solid green',
		marginLeft: '10px',
		marginRight: '10px',
		marginBottom: '10px',
		marginTop: '3px',
		padding: '20px',
		display: 'flex',
		flexWrap: 'wrap',
	};
	const divCard = { float: 'left', width: '50%', marginRight: '80px' };

	const navigate = useNavigate();

	const {
		id,
		title,
		duration,
		description,
		creationDate,
		authors: courseAuthors,
	} = course;

	const getAuthorsById = (list) => {
		const result = list
			?.map((id) =>
				authorList
					?.filter((author) => author.id === id)
					?.map((author) => author.name)
			)
			.join(', ');
		console.log(`result from get authors`, result);
		return result;
	};

	const toHoursAndMinutes = (totalMinutes) => {
		const minutes = totalMinutes % 60;
		const hours = Math.floor(totalMinutes / 60);

		return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
	};

	const padTo2Digits = (num) => {
		return num.toString().padStart(2, '0');
	};
	const handleDelete = () => {
		dispatch({ type: DELETE_COURSE, payload: course.id });
	};
	return (
		<div style={courseCardStyle}>
			<div style={divCard}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
				<p>
					<b>Authors: </b>
					{getAuthorsById(courseAuthors)}
				</p>
				<p>
					<b>Duration: </b> {toHoursAndMinutes(duration)}
				</p>
				<p>
					<b>Created: </b> {creationDate.replaceAll('/', '.')}
				</p>
				<Button
					type='button'
					buttonText='Show course'
					onClick={() => navigate(`/courses/${id}`)}
					style={{ padding: '10px 24px', marginLeft: '10px' }}
				/>
				<Button
					type='button'
					buttonText='Delete'
					onClick={handleDelete}
					style={{ padding: '10px 24px', marginLeft: '10px' }}
				/>
				<Button
					type='button'
					buttonText='Update'
					style={{ padding: '10px 24px', marginLeft: '10px' }}
				/>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	course: ProtoTypes.object.isRequired,
};

export default CourseCard;
