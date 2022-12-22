import React from 'react';
import Button from '../../../../common/Button/Button';

const CourseCard = ({ course, authorList }) => {
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

	const {
		title,
		duration,
		description,
		creationDate,
		authors: courseAuthors,
	} = course;

	const getAuthorsById = (list) => {
		return list
			?.map((id) =>
				authorList
					?.filter((author) => author.id === id)
					?.map((author) => author.name)
			)
			.join(', ');
	};

	const toHoursAndMinutes = (totalMinutes) => {
		const minutes = totalMinutes % 60;
		const hours = Math.floor(totalMinutes / 60);

		return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
	};

	const padTo2Digits = (num) => {
		return num.toString().padStart(2, '0');
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
					style={{ padding: '10px 24px', marginLeft: '10px' }}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
