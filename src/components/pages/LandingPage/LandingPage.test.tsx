import * as React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '.';

jest.mock('../../../data/data.json', () => ({
  __esModule: true,
  projects: [
    {
      id: 1,
      title: 'Project',
      subtitle: '',
      imageLink: '',
      codeLink: '',
      demoLink: '',
      stateChartLink: '',
    },
  ],
}));

describe('<LandingPage />', () => {
  test('should render correctly', () => {
    render(<LandingPage />);
    expect(screen.getByText('Project')).toBeVisible();
  });
});
