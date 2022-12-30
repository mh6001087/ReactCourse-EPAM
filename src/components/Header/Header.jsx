import React, { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	const onClick = () => {
		const token = JSON.parse(localStorage.getItem('token'));
		const userName = JSON.parse(localStorage.getItem('userName'));
		if (token && userName) {
			setIsLoggedIn(false);
			localStorage.removeItem('userName');
			setuserName('');
			localStorage.removeItem('token');
		}
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
	const [userName, setuserName] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState('');

	useEffect(() => {
		const userName = JSON.parse(localStorage.getItem('userName'));
		if (userName) {
			setuserName(userName);
		}
	}, []);

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('token'));
		if (token) {
			setIsLoggedIn(true);
		}
	}, []);
	return (
		<div style={{ border: 3, margin: '9px' }}>
			<ul style={uIStyle}>
				<li style={lILeftStyle}>
					<Logo />
				</li>
				<li style={lIRightStyle}>
					{isLoggedIn ? (
						<Button
							type='button'
							buttonText='Logout'
							onClick={onClick}
							style={{ padding: '10px 24px', marginLeft: '10px' }}
						/>
					) : (
						<div></div>
					)}
				</li>
				<li style={nameStyle}>
					<p style={anchorStyle}>{userName}</p>
				</li>
			</ul>
		</div>
	);
};

export default Header;
