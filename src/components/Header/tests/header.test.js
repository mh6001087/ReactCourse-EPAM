import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithRouterAndProvider } from '../../../store/utils/renderWithRouterAndProvider';
import Header from '../Header';

describe('Register component', () => {
	it("Header should have logo and user's name", () => {
		renderWithRouterAndProvider(<Header />);
		const userName = screen.getByText('mock name');
		const logo = screen.getByTestId('logo');
		expect(logo).toBeInTheDocument();
		expect(userName).toBeInTheDocument();
	});
});
