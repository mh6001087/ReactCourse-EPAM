import React from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const CreateCourse = (props) => {
	const onCoursesCreate = (key) => {};
	return (
		<div style={{ display: 'flex', gap: '1rem', border: 3, margin: '9px' }}>
			<label>Title</label>
			<Input />
			<label>Description</label>
			<br />
			<textarea rows='4' cols='50'></textarea>
			<Button
				buttonText={'Creat course'}
				onClick={() => onCoursesCreate()}
				style={{ padding: '10px 24px', marginLeft: '10px' }}
			/>
		</div>
	);
};

export default CreateCourse;
