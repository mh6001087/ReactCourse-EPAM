import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './registrationStyle.css';
const Registration = () => {
	const url = 'http://localhost:4000/register';
	const [user, setUser] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'name') {
			setName(value);
		}
		if (id === 'email') {
			setEmail(value);
		}
		if (id === 'password') {
			setPassword(value);
		}
	};
	const createUser = async (e) => {
		e.preventDefault();
		const newUser = {
			name: name,
			password: password,
			email: email,
		};
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		console.log(`result`, result);
		setUser(result);
		if (result.successful) {
			navigate('/login');
		} else {
			alert('dummy validation, user already exists');
		}
	};
	return (
		<form className='form' onSubmit={createUser}>
			<div className='form-body'>
				<h1>Registration</h1>
				<label>Name</label>
				<Input
					placeholder={'Enter name'}
					type='text'
					onChange={(e) => handleInputChange(e)}
					value={name}
					id='name'
				/>
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
					<Button buttonText='Registration' onClick={createUser} />
				</div>

				<p>
					If you have an account you can <Link to={'/login'}>Login</Link>
				</p>
			</div>
		</form>
	);
};

export default Registration;
