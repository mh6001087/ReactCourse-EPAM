// src/pages/first-page.jsx

import { Link, Outlet } from 'react-router-dom';

export default function FirstPage() {
	return (
		<>
			<h2>First page component</h2>
			<div>
				<Link to={`/first-page/id1`}>Link with parameter 1</Link>
			</div>
			<div>
				<Link to={`/first-page/id2`}>Link with parameter 2</Link>
			</div>
			<Outlet />
			<div>
				<Link to='/'>Go back to entry point</Link>
			</div>
		</>
	);
}
