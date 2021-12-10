import * as React from 'react';
import { Card } from '..';
import { projects } from '../../data/data.json';

export interface ProjectsPreviewProps {}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = () => {
  return (
    <div className="columns is-mobile is-multiline">
      {projects.map(
        ({ id, title, subtitle, image, code, demo, statechart }) => {
          return (
            <div
              className="column is-full-mobile is-half-tablet is-one-third-desktop"
              key={id}
            >
              <Card
                title={title}
                subtitle={subtitle}
                code={code}
                demo={demo}
                stateChart={statechart}
                img={image}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProjectsPreview;
