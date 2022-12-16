import React from 'react';
import Button from '../../../../common/Button/Button';

const AuthorItem = ({ authorName }) => {
	return (
		<>
			<p>{authorName}</p>
			<Button buttonText='Add author'></Button>
		</>
	);
};

export default AuthorItem;
