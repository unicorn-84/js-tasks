import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsOverview from '.';
import { TProjects } from '../../types';

const projects: TProjects = [
  {
    id: 1,
    title: 'Countdown',
    subtitle: '',
    demoLink: '',
    codeLink: '',
    stateChartLink: '',
    imageLink: '',
  },
];

describe('<ProjectsPreview />', () => {
  test('should render correctly', () => {
    render(<ProjectsOverview projects={projects} />);
    expect(screen.getByText('Countdown')).toBeVisible();
  });
});
