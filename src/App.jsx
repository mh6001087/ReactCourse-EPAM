import './App.css';
import Header from './components/Header/Header';
import Courses from '../src/components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateComponent';
function App() {
	// const navigate = useNavigate();
	const { id } = useParams();
	useEffect(() => {
		const token = localStorage.getItem('token');

		// check if the current route is login or registeration page
		if (token) {
			// navigate('/courses');
		}
	}, []);

	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<Courses />} />
						<Route path='courses' element={<Courses />} />
						<Route path='courses/:courseId' element={<CourseInfo />} />
						<Route
							path='courses/add'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
						<Route
							path='courses/update/:courseId'
							element={
								<PrivateRoute>
									<CourseForm />
								</PrivateRoute>
							}
						/>
						<Route path='registration' element={<Registration />} />
						<Route path='login' element={<Login />} />
						<Route path='*' element={<Navigate to='/courses' />} />
						{/* <Route
							path='/private'
							element={<PrivateRoute>[your private component]</PrivateRoute>}
						/> */}
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
