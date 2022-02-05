import { render, screen } from '@testing-library/react';
import App from './App';

test('Filter Movies', () => {
  render(<App />);
  const linkElement = screen.getByText(/filter movies/i);
  expect(linkElement).toBeInTheDocument();
});
