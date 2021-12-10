import * as React from 'react';
import { ProjectsOverview } from '../..';
import { projects } from '../../../data/data.json';

export interface ILandingPageProps {}

const LandingPage: React.FC<ILandingPageProps> = () => {
  return (
    <div className="section">
      <div className="container">
        <ProjectsOverview projects={projects} />
      </div>
    </div>
  );
};

export default LandingPage;
