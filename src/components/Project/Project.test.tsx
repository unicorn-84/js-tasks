import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '.';

describe('<Project />', () => {
  test('should render correctly', () => {
    render(
      <Project
        id={1}
        codeLink=""
        demoLink=""
        imageLink=""
        stateChartLink=""
        title="Project"
        subtitle=""
      />
    );
    expect(screen.getByText('Project')).toBeVisible();
  });
});
