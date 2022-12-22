import React from 'react';
import Button from '../../../../common/Button/Button';

const AuthorItem = ({ author, btnName, handleMyClick }) => {
	return (
		<>
			<p>{author.name}</p>
			<Button
				buttonText={btnName}
				handleMyClick={handleMyClick}
				author={author}
			></Button>
		</>
	);
};

export default AuthorItem;
