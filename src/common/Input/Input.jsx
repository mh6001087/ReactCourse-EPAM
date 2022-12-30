import React from 'react';

const Input = (props) => {
	const inputStyle = {
		width: '40%',
		padding: '12px 20px',
		margin: '8px 0',
		display: 'inline-block',
		border: '1px solid #ccc',
		borderRadius: '4px',
		boxSizing: 'border-box',
		flex: 1,
	};
	const searchCard = {
		paddingLeft: '10px',
		display: 'flex',
		flexWrap: 'wrap',
	};
	return (
		<div style={searchCard}>
			<input
				type={props.type}
				id={props.id}
				name='fname'
				placeholder={props.placeholder}
				onChange={props.onChange}
				style={inputStyle}
				value={props.value}
			/>
		</div>
	);
};

export default Input;
