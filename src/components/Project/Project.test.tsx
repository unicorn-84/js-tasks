import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Project from '.';

describe('<Project />', () => {
  test('should render correctly', () => {
    render(
      <Project
        id={1}
        codeLink=""
        name=""
        imageLink=""
        stateChartLink=""
        title="Project"
        subtitle=""
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByText('Project')).toBeVisible();
  });
});
