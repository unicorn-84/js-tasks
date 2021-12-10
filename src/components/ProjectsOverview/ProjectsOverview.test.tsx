import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsOverview from '.';
import { projects } from '../../data/data.json';

jest.mock('../../data/data.json');

describe('<ProjectsPreview />', () => {
  test('should render correctly', () => {
    render(<ProjectsOverview projects={projects} />);
    expect(screen.getByText('Project')).toBeVisible();
  });
});
