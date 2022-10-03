import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders interval selection options', () => {
  render(<App />);
  const intervalOptions = screen.getByText(/Interval Options/i);
  expect(intervalOptions).toBeInTheDocument();
});
