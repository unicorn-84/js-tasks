import * as React from 'react';
import { Link } from 'react-router-dom';
import { TProject } from '../../types';

export interface IProjectProps extends TProject {}

const Project: React.FC<IProjectProps> = ({
  title,
  subtitle,
  codeLink,
  name,
  imageLink,
  stateChartLink,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-16by9">
          <img src={imageLink} alt={`${title} image`} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <footer className="card-footer">
        <Link
          to={`/demo/${name}`}
          className="card-footer-item has-text-info has-text-weight-medium"
        >
          Demo
        </Link>
        <a
          href={codeLink}
          className="card-footer-item has-text-info has-text-weight-medium"
        >
          Code
        </a>
        <a
          href={stateChartLink}
          className="card-footer-item has-text-info has-text-weight-medium"
        >
          Statechart
        </a>
      </footer>
    </div>
  );
};

export default Project;
