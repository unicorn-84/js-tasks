import * as React from 'react';
import { ProjectsOverview } from '../..';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="section">
      <div className="container">
        <ProjectsOverview />
      </div>
    </div>
  );
};

export default LandingPage;
