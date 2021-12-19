import { useMachine } from '@xstate/react';
import * as React from 'react';
import {
  StyledBox,
  StyledTitle,
  StyledTime,
  StyledLevel,
} from './Countdown.style';
import { countdownMachine } from '.';
import { addLeadingZeroToPositiveNumber } from '../../utils';

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
        <StyledTime>{addLeadingZeroToPositiveNumber(days)}</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Hours</StyledTitle>
        <StyledTime>{addLeadingZeroToPositiveNumber(hours)}</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Minutes</StyledTitle>
        <StyledTime>{addLeadingZeroToPositiveNumber(minutes)}</StyledTime>
      </StyledBox>
      <StyledBox>
        <StyledTitle>Seconds</StyledTitle>
        <StyledTime>{addLeadingZeroToPositiveNumber(seconds)}</StyledTime>
      </StyledBox>
    </StyledLevel>
  );
};

export default Countdown;
