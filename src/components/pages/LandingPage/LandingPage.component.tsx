import * as React from 'react';
import { ProjectsOverview } from '../..';
import { projects } from '../../../data/data.json';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="section">
      <div className="container">
        <ProjectsOverview projects={projects} />
      </div>
    </div>
  );
};

export default LandingPage;
