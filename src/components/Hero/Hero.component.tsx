import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface IHeroProps {}

const Hero: React.FC<IHeroProps> = () => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <p className="title">JavaScript tasks</p>
          <p className="subtitle">
            JavaScript projects with TypeScript, React and XState
          </p>
          <a href="https://github.com/unicorn-84/js-tasks">
            <span className="icon">
              <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
