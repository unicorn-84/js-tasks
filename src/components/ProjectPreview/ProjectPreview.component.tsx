import * as React from 'react';
import { Project } from '..';
import { TProject } from '../../types';

export interface IProjectPreviewProps {
  project: TProject;
}

const ProjectPreview: React.FC<IProjectPreviewProps> = ({
  project: {
    id,
    title,
    subtitle,
    codeLink,
    demoLink,
    stateChartLink,
    imageLink,
  },
}) => {
  return (
    <Project
      id={id}
      title={title}
      subtitle={subtitle}
      codeLink={codeLink}
      demoLink={demoLink}
      stateChartLink={stateChartLink}
      imageLink={imageLink}
    />
  );
};

export default ProjectPreview;
