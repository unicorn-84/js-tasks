import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./data/data.json');

describe('<App />', () => {
  test('should render correctly', () => {
    render(<App />);
    expect(screen.getByText('Project'));
  });
});
