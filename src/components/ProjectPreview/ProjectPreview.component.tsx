import * as React from 'react';
import { Project } from '..';
import { TProject } from '../../types';

export interface IProjectPreviewProps {
  project: TProject;
}

const ProjectPreview: React.FC<IProjectPreviewProps> = ({
  project: { id, title, subtitle, name, codeLink, stateChartLink, imageLink },
}) => {
  return (
    <Project
      id={id}
      title={title}
      subtitle={subtitle}
      codeLink={codeLink}
      name={name}
      stateChartLink={stateChartLink}
      imageLink={imageLink}
    />
  );
};

export default ProjectPreview;
