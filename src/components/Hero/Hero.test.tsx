import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('<Hero />', () => {
  test('should render correctly', () => {
    render(<Hero />);
    expect(screen.getByText('JavaScript tasks')).toBeVisible();
  });
});
