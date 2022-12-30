import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

const Login = () => {
	const url = 'http://localhost:4000/login';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'email') {
			setEmail(value);
		}
		if (id === 'password') {
			setPassword(value);
		}
	};

	const login = async () => {
		const user = {
			email: email,
			password: password,
		};
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful) {
			localStorage.setItem('token', JSON.stringify(result.result));
			localStorage.setItem('userName', JSON.stringify(result.user.name));
			navigate('/courses');
		}
	};
	return (
		<form className='form'>
			<div className='form-body'>
				<h1>Login</h1>
				<label>Email</label>
				<Input
					placeholder={'Enter Email'}
					type='email'
					onChange={(e) => handleInputChange(e)}
					value={email}
					id='email'
				/>
				<label>Password</label>
				<Input
					placeholder={'Enter password'}
					type='password'
					id='password'
					onChange={(e) => handleInputChange(e)}
					value={password}
				/>
				<div className='footer'>
					<Button buttonText='Login' onClick={login} />
				</div>

				<p>
					If you not have an account you can
					<Link to={'/registration'}> registration</Link>
				</p>
			</div>
		</form>
	);
};

export default Login;
