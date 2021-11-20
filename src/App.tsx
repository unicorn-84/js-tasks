import * as React from 'react';
import { Hero } from './components';

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default App;
