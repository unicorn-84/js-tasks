import * as React from 'react';
import { Link } from 'react-router-dom';
import StyledCountdownPage from './CountdownPage.style';
import { projects } from '../../../data/data.json';
import { TProject } from '../../../types';

const countdownData: TProject | undefined = projects.find(
  (item) => item.name === 'countdown'
);

export interface ICountdownPageProps {}

const CountdownPage: React.FC<ICountdownPageProps> = () => {
  return (
    <StyledCountdownPage className="hero is-fullheight">
      <div className="hero-head">
        <div className="container">
          <div className="is-flex is-justify-content-flex-end pt-5">
            <Link to="/" className="mx-5 has-text-warning-dark">
              Home
            </Link>
            {countdownData && (
              <>
                <a
                  className="mx-5 has-text-warning-dark"
                  href={countdownData.codeLink}
                >
                  Code
                </a>
                <a
                  className="mx-5 has-text-warning-dark"
                  href={countdownData.stateChartLink}
                >
                  Statechart
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
      </div>
    </StyledCountdownPage>
  );
};

export default CountdownPage;
