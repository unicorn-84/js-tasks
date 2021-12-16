import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectPreview from '.';
import { projects } from '../../data/data.json';

jest.mock('../../data/data.json');

describe('<ProjectPreview />', () => {
  test('should render correctly', () => {
    render(<ProjectPreview project={projects[0]} />, { wrapper: MemoryRouter });
    expect(screen.getByText('Project')).toBeVisible();
  });
});
