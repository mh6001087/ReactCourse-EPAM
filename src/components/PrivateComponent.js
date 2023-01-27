import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
	// const auth = getUserRole(); // add logic to determine the value for the condition
	const { role } = useSelector((state) => state.user);
	return role === 'admin' ? children : <Navigate to='/login' />;
}
