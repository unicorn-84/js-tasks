import styled from 'styled-components';
import { devices } from '../../utils';

export const StyledLevel = styled.nav`
  --size: 1rem;
  --titleColor: rgb(141, 92, 17);
  --timeColor: rgb(45, 24, 13);

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media ${devices.mobileM} {
    --size: 1.25rem;
  }

  @media ${devices.mobileL} {
    --size: 1.5rem;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }

  @media ${devices.laptopL} {
    --size: 2rem;
  }
`;

export const StyledBox = styled.div`
  width: calc(var(--size) * 6);
  height: calc(var(--size) * 6);
  background-color: rgba(255, 254, 202, 0.7);
  border-radius: calc(var(--size) / 3);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;

  @media ${devices.tablet} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.div`
  font-size: calc(var(--size) / 1.75);
  text-transform: uppercase;
  font-weight: 500;
  color: var(--titleColor);
`;

export const StyledTime = styled.div`
  font-size: calc(var(--size) * 2);
  text-transform: uppercase;
  font-weight: 700;
  color: var(--timeColor);
`;
