import React, { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
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
	const [changedHeader, setchangedHeader] = useState('');
	const location = useLocation();
	const navigate = useNavigate();

	const onClick = () => {
		const token = JSON.parse(localStorage.getItem('token'));
		const userName = JSON.parse(localStorage.getItem('userName'));
		if (token && userName) {
			setIsLoggedIn(false);
			localStorage.removeItem('userName');
			setuserName('');
			localStorage.removeItem('token');
		}
		navigate(`/login`);
	};
	useEffect(() => {
		if (
			location.pathname === '/login' ||
			location.pathname === '/registration'
		) {
			setchangedHeader(false);
		} else {
			setchangedHeader(true);
		}
		// Send request to your server to increment page view count
	}, [location]);

	useEffect(() => {
		const userName = JSON.parse(localStorage.getItem('userName'));
		if (userName) {
			setuserName(userName);
		}
	}, []);

	// useEffect(() => {
	// 	const token = JSON.parse(localStorage.getItem('token'));
	// 	if (token) {
	// 		setIsLoggedIn(true);
	// 	}
	// }, []);
	return (
		<div style={{ border: 3, margin: '9px' }}>
			<ul style={uIStyle}>
				<li style={lILeftStyle}>
					<Logo />
				</li>
				<li style={lIRightStyle}>
					{changedHeader ? (
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
					{changedHeader ? <p style={anchorStyle}>{userName}</p> : <p></p>}
				</li>
			</ul>
		</div>
	);
};

export default Header;
