import * as React from 'react';
import {
  StyledBox,
  StyledTitle,
  StyledTime,
  StyledLevel,
} from './Countdown.style';

export interface ICountdownProps {}

const Countdown: React.FC<ICountdownProps> = () => {
  return (
    <StyledLevel>
      <StyledBox>
        <StyledTitle>Days</StyledTitle>
        <StyledTime>365</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Hours</StyledTitle>
        <StyledTime>24</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Minutes</StyledTitle>
        <StyledTime>59</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Seconds</StyledTitle>
        <StyledTime>59</StyledTime>
      </StyledBox>
    </StyledLevel>
  );
};

export default Countdown;
