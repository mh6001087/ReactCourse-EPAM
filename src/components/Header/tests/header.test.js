import { screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';
import { renderWithRouterAndProvider } from '../../../store/utils/renderWithRouterAndProvider';

describe('Register component', () => {
	it("Header should have logo and user's name", () => {
		renderWithRouterAndProvider(<Header />);
		const element = screen.getByRole('heading');
		expect(element).toBeInTheDocument();
	});
});
