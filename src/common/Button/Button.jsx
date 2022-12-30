import React from 'react';

const Button = ({ onClick, style, buttonText }) => {
	return (
		<button style={style} onClick={onClick}>
			{buttonText}
		</button>
	);
};

export default Button;
