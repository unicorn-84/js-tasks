import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./data/data.json', () => ({
  __esModule: true,
  projects: [
    {
      id: 1,
      title: 'Project',
      subtitle: '',
      image: '',
      code: '',
      demo: '',
      statechart: '',
    },
  ],
}));

describe('<App />', () => {
  test('should render correctly', () => {
    render(<App />);
    expect(screen.getByText('Project'));
  });
});
