import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsOverview from '.';

describe('<ProjectsPreview />', () => {
  test('should render correctly', () => {
    render(<ProjectsOverview />);
    expect(screen.getByText('Countdown')).toBeVisible();
  });
});
