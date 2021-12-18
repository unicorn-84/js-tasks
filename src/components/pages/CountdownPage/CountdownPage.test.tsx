import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CountdownPage from '.';

describe('<CountdownPage />', () => {
  test('should render correctly', () => {
    render(<CountdownPage />, { wrapper: MemoryRouter });
    expect(screen.getByText('Home')).toBeVisible();
  });
});
