import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

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

const CourseInfo = () => {
	let { courseId } = useParams();
	const courses = useSelector((state) => state.courses.courses);
	const course = courses.find((e) => e.id === courseId);
	const authorsList = useSelector((state) => state);
	console.log(`authorsList from info`, authorsList);
	const {
		id,
		title,
		duration,
		description,
		creationDate,
		authors: courseAuthors,
	} = course;
	const getAuthorsById = (list) => {
		return list
			?.map((id) =>
				authorsList.result
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
		<>
			<div style={courseCardStyle}>
				<Link style={{ color: 'black' }} to='/courses'>
					{' '}
					- Back to Course
				</Link>
				<div style={divCard}>
					<h2 style={{ textAlign: 'center' }}>{title}</h2>
					<p>{description}</p>
				</div>
				<div>
					<p>
						<b>Id: </b> {id}
					</p>
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
				</div>
			</div>
		</>
	);
};

export default CourseInfo;
