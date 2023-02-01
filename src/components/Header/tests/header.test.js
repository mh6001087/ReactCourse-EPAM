import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Register component', () => {
	it("Header should have logo and user's name", () => {
		render(<Header />);
		const element = screen.getByRole('heading');
		expect(element).toBeInTheDocument();
	});
});
