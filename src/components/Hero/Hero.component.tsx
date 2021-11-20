import * as React from 'react';
import './Hero.style.css';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <p className="title">JavaScript tasks</p>
          <p className="subtitle">With TypeScript, React and XState</p>
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
