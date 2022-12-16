import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	const onClick = () => {
		alert.name('alert from header!');
	};
	const uIStyle = {
		listStyleType: 'none',
		margin: '0',
		padding: '0',
		overflow: 'hidden',
		backgroundColor: 'white',
		border: '2px solid green',
	};
	const anchorStyle = {
		display: 'block',
		color: 'black',
		textAlign: 'center',
		paddingRight: '9px',
		textDecoration: 'none',
	};
	const lIRightStyle = {
		float: 'right',
		margin: '7px',
	};
	const nameStyle = {
		float: 'right',
	};
	const lILeftStyle = { float: 'left', display: 'block' };
	return (
		<div style={{ border: 3, margin: '9px' }}>
			<ul style={uIStyle}>
				<li style={lILeftStyle}>
					<Logo />
				</li>
				<li style={lIRightStyle}>
					<Button
						type='button'
						buttonText='Logout'
						onClick={onClick}
						style={{ padding: '10px 24px', marginLeft: '10px' }}
					/>
				</li>
				<li style={nameStyle}>
					<p style={anchorStyle}>Mahmoud</p>
				</li>
			</ul>
		</div>
	);
};

export default Header;
