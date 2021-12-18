import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Countdown from '.';

describe('<Countdown />', () => {
  test('should render correctly', () => {
    render(<Countdown />);
    expect(screen.getByText('Countdown')).toBeVisible();
  });
});
