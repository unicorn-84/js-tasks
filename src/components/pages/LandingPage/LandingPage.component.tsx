import * as React from 'react';

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = ({ children }) => {
  return (
    <div className="section">
      <div className="container">{children}</div>
    </div>
  );
};

export default LandingPage;
