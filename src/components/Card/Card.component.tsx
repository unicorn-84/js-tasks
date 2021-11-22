import * as React from 'react';

export interface CardProps {
  /**
   * The image's src
   */
  img: string;
  /**
   * The card's title
   */
  title: string;
  /**
   * The card's subtitle
   */
  subtitle: string;
  /**
   * The demo link
   */
  demo: string;
  /**
   * The code link
   */
  code: string;
  /**
   * The statechart link
   */
  stateChart: string;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  subtitle,
  demo,
  code,
  stateChart,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt={`${title} image`} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <footer className="card-footer">
        <a
          href={demo}
          className="card-footer-item has-text-info has-text-weight-medium"
        >
          Demo
        </a>
        <a
          href={code}
          className="card-footer-item has-text-info has-text-weight-medium"
        >
          Code
        </a>
        <a
          href={stateChart}
          className="card-footer-item has-text-info has-text-weight-medium"
        >
          Statechart
        </a>
      </footer>
    </div>
  );
};

export default Card;
