import * as React from 'react';
import { Project } from '..';

export type TProject = {
  id: number;
  title: string;
  subtitle: string;
  codeLink: string;
  demoLink: string;
  stateChartLink: string;
  imageLink: string;
};

export interface ProjectPreviewProps {
  project: TProject;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project: { title, subtitle, codeLink, demoLink, stateChartLink, imageLink },
}) => {
  return (
    <Project
      title={title}
      subtitle={subtitle}
      code={codeLink}
      demo={demoLink}
      stateChart={stateChartLink}
      img={imageLink}
    />
  );
};

export default ProjectPreview;
