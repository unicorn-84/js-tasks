import * as React from 'react';
import { Card } from '../..';
import { projects } from '../../../data/data.json';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="section">
      <div className="container">
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
      </div>
    </div>
  );
};

export default LandingPage;
