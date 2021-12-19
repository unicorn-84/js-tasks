import styled from 'styled-components';
import { devices } from '../../utils';

export const StyledLevel = styled.nav`
  --size: 1rem;
  --boxBgColor: rgba(255, 255, 255, 0.7);
  --titleColor: rgba(10, 10, 10, 0.9);
  --timeColor: rgba(10, 10, 10, 0.9);

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
    justify-content: space-between;
  }

  @media ${devices.laptopL} {
    --size: 2rem;
  }
`;

export const StyledBox = styled.div`
  width: calc(var(--size) * 6);
  height: calc(var(--size) * 6);
  background-color: var(--boxBgColor);
  border-radius: 4px;
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
  font-size: calc(var(--size) * 3);
  text-transform: uppercase;
  font-weight: 700;
  color: var(--timeColor);
  line-height: 1.2;
`;
