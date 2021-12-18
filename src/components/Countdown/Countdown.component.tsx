import * as React from 'react';
import { StyledBox, StyledTitle, StyledTime } from './Countdown.style';

export interface ICountdownProps {}

const Countdown: React.FC<ICountdownProps> = () => {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <StyledBox>
          <StyledTitle>Days</StyledTitle>
          <StyledTime>365</StyledTime>
        </StyledBox>
      </div>
      <div className="level-item has-text-centered">
        <StyledBox>
          <StyledTitle>Hours</StyledTitle>
          <StyledTime>24</StyledTime>
        </StyledBox>
      </div>
      <div className="level-item has-text-centered">
        <StyledBox>
          <StyledTitle>Minutes</StyledTitle>
          <StyledTime>59</StyledTime>
        </StyledBox>
      </div>
      <div className="level-item has-text-centered">
        <StyledBox>
          <StyledTitle>Seconds</StyledTitle>
          <StyledTime>59</StyledTime>
        </StyledBox>
      </div>
    </nav>
  );
};

export default Countdown;
