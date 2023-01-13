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
// import * as actionCreators from './store/courses/actions';
// import { connect } from 'react-redux';

function App() {
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

// const mapStateToProps = (state) => {
// 	return state;
// };
// export default connect(mapStateToProps, actionCreators)(App);
export default App;
