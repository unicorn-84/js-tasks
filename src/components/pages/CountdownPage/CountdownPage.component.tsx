import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledCountdownPage, StyledNav } from './CountdownPage.style';
import { projects } from '../../../data/data.json';
import { TProject } from '../../../types';
import { Countdown } from '../..';

const countdownData: TProject | undefined = projects.find(
  (item) => item.name === 'countdown'
);

export interface ICountdownPageProps {}

const CountdownPage: React.FC<ICountdownPageProps> = () => {
  return (
    <StyledCountdownPage className="hero is-fullheight">
      <div className="hero-head px-5">
        <div className="container is-max-desktop">
          <StyledNav>
            <Link to="/" className="button is-white is-small is-fullwidth mx-1">
              Home
            </Link>
            {countdownData && (
              <>
                <a
                  className="button is-small is-white is-fullwidth mx-1"
                  href={countdownData.codeLink}
                >
                  Code
                </a>
                <a
                  className="button is-small is-white is-fullwidth mx-1"
                  href={countdownData.stateChartLink}
                >
                  Statechart
                </a>
              </>
            )}
          </StyledNav>
        </div>
      </div>

      <div className="hero-body px-5">
        <div className="container is-max-desktop">
          <Countdown />
        </div>
      </div>
    </StyledCountdownPage>
  );
};

export default CountdownPage;
