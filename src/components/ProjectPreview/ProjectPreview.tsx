import * as React from 'react';
import { Card } from '..';

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  codeLink: string;
  demoLink: string;
  stateChartLink: string;
  imageLink: string;
};

export interface ProjectPreviewProps {
  project: Project;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project: { title, subtitle, codeLink, demoLink, stateChartLink, imageLink },
}) => {
  return (
    <Card
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
