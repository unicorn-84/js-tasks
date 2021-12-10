import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectPreview, { Project } from '.';

const project: Project = {
  id: 1,
  title: 'Countdown',
  subtitle: '',
  demoLink: '',
  codeLink: '',
  stateChartLink: '',
  imageLink: '',
};

describe('<ProjectPreview />', () => {
  test('should render correctly', () => {
    render(<ProjectPreview project={project} />);
    expect(screen.getByText('Countdown')).toBeVisible();
  });
});
