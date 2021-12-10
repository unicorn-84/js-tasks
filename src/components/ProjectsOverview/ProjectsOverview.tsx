import * as React from 'react';
import { ProjectPreview } from '..';
import { projects } from '../../data/data.json';

export interface ProjectsPreviewProps {}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = () => {
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
