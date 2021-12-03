import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero, LandingPage } from './components';

export interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Hero />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
