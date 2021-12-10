import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components';

export interface IAppProps extends React.HTMLAttributes<HTMLDivElement> {}

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<>Project</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
