import './App.css';
import Header from './components/Header/Header';
import Courses from '../src/components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function App() {
	// const navigate = useNavigate();
	const { id } = useParams();
	console.log(`useParams`, id);
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
						<Route path='courses/add' element={<CreateCourse />} />
						<Route path='registration' element={<Registration />} />
						<Route path='login' element={<Login />} />
						<Route path='*' element={<Navigate to='/courses' />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
