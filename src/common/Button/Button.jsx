import React from 'react';

const Button = ({ onClick, style, buttonText }) => {
	return (
		<button style={style} onClick={onClick} data-testid='add-course-btn'>
			{buttonText}
		</button>
	);
};

export default Button;
