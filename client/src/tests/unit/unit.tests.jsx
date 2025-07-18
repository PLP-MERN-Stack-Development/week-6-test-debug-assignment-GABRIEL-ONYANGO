import { render, screen } from '@testing-library/react';
import BugForm from './BugForm';

test('renders form inputs', () => {
  render(<BugForm />);
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
});
