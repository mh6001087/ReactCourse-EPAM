import React from 'react';

const Button = ({ handleMyClick, style, buttonText }) => {
	return (
		<button style={style} onClick={handleMyClick}>
			{buttonText}
		</button>
	);
};

export default Button;
