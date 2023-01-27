import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { loginAsync } from '../../store/user/actions';
import { useDispatch } from 'react-redux';
import { store } from '../../store/rootReducer';
import { getUserMe } from '../../store/user/thunk';
const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [token, setToken] = useState(null);
	const [error, setError] = useState(null);
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

	const login = async (e) => {
		e.preventDefault();
		dispatch(loginAsync(email, password));
		navigate('/courses');
	};

	store.subscribe(() => {
		// Retrieve data from store
	});

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
