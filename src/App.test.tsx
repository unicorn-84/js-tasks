import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('should render correctly', () => {
    render(<App />);
    expect(screen.getByText('JavaScript tasks'));
  });
});
