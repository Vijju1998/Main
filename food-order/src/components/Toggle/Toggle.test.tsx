import { render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';
test('renders learn react link', () => {
  render(<Toggle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
