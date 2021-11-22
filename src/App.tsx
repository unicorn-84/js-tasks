import * as React from 'react';
import { Card, Hero } from './components';

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Hero />
      <div className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
              <Card
                img="https://via.placeholder.com/1280x960"
                code="https://github.com/unicorn-84/js-tasks"
                demo="https://js-tasks-project.web.app"
                stateChart="https://stately.ai/viz/f790cff8-3ad9-4b21-844e-00fb672181ab"
                title="Countdown"
                subtitle="Countdown to New Year 2022"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
