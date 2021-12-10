import * as React from 'react';
import { ProjectPreview } from '..';
import { TProjects } from '../../types';

export interface IProjectsOverviewProps {
  projects: TProjects;
}

const ProjectsPreview: React.FC<IProjectsOverviewProps> = ({ projects }) => {
  return (
    <div className="columns is-mobile is-multiline">
      {projects.map((project) => {
        return (
          <div
            className="column is-full-mobile is-half-tablet is-one-third-desktop"
            key={project.id}
          >
            <ProjectPreview project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPreview;
