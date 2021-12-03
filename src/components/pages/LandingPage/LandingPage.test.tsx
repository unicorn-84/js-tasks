import * as React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '.';

describe('<LandingPage />', () => {
  test('should render correctly', () => {
    render(<LandingPage />);
    expect(screen.getByText('Countdown')).toBeVisible();
  });
});
