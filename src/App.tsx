import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountdownPage, LandingPage } from './components';

export interface IAppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo/countdown" element={<CountdownPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
