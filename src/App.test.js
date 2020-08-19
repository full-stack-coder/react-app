import React from 'react';
import { render } from '@testing-library/react';
import Albums from './Albums';

test('renders album header', () => {
  const { getByText } = render(<Albums />);
  const linkElement = getByText("List of Albums");
  expect(linkElement).toBeInTheDocument();
});
