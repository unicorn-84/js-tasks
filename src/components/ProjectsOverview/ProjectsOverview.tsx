import * as React from 'react';
import { TProject, ProjectPreview } from '..';

export type Projects = TProject[];

export interface ProjectsPreviewProps {
  projects: Projects;
}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ projects }) => {
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
