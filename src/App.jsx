import './App.css';
import Header from './components/Header/Header';
import Courses from '../src/components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	return (
		<>
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

			{/* {course ? (
				<CreateCourse authorList={mockedAuthorsList} />
			) : (
				<Courses
					courseList={mockedCoursesList}
					authorList={mockedAuthorsList}
					setCourse={setCourse}
				/>
			)} */}
		</>
	);
}

export default App;
