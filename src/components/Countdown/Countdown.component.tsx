import { useMachine } from '@xstate/react';
import * as React from 'react';
import {
  StyledBox,
  StyledTitle,
  StyledTime,
  StyledLevel,
} from './Countdown.style';
import { countdownMachine } from '.';

export interface ICountdownProps {}

const Countdown: React.FC<ICountdownProps> = () => {
  const [
    {
      context: { seconds, minutes, hours, days },
    },
  ] = useMachine(countdownMachine);
  return (
    <StyledLevel>
      <StyledBox>
        <StyledTitle>Days</StyledTitle>
        <StyledTime>{days}</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Hours</StyledTitle>
        <StyledTime>{hours}</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Minutes</StyledTitle>
        <StyledTime>{minutes}</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Seconds</StyledTitle>
        <StyledTime>{seconds}</StyledTime>
      </StyledBox>
    </StyledLevel>
  );
};

export default Countdown;
