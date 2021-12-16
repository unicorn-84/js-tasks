import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '.';

jest.mock('../../../data/data.json');

describe('<LandingPage />', () => {
  test('should render correctly', () => {
    render(<LandingPage />, { wrapper: MemoryRouter });
    expect(screen.getByText('Project')).toBeVisible();
  });
});
