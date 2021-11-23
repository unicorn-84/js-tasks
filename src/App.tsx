import * as React from 'react';
import { Card, Hero } from './components';
import { projects } from './data/data.json';

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Hero />
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
    </>
  );
};

export default App;
