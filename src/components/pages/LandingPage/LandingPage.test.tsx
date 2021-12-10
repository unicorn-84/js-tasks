import * as React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '.';

jest.mock('../../../data/data.json');

describe('<LandingPage />', () => {
  test('should render correctly', () => {
    render(<LandingPage />);
    expect(screen.getByText('Project')).toBeVisible();
  });
});
