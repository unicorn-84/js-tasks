import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '.';

describe('<Project />', () => {
  test('should render correctly', () => {
    render(
      <Project
        code=""
        demo=""
        img=""
        stateChart=""
        title="Project"
        subtitle=""
      />
    );
    expect(screen.getByText('Project')).toBeVisible();
  });
});
