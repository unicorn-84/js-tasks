import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';

describe('<Card />', () => {
  test('should render correctly', () => {
    render(
      <Card code="" demo="" img="" stateChart="" title="Project" subtitle="" />
    );
    expect(screen.getByText('Project')).toBeVisible();
  });
});
