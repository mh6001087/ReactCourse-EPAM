import React from 'react';
import Button from '../../../../common/Button/Button';
import ProtoTypes from 'prop-types';

const AuthorItem = ({ author, btnName, onClick }) => {
	return (
		<>
			<p>{author.name}</p>
			<Button buttonText={btnName} onClick={onClick} author={author}></Button>
		</>
	);
};
AuthorItem.propTypes = {
	author: ProtoTypes.object.isRequired,
	btnName: ProtoTypes.string.isRequired,
	onClick: ProtoTypes.func.isRequired,
};

export default AuthorItem;
