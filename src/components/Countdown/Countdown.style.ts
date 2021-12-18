import styled from 'styled-components';

export const StyledBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 254, 202, 0.7);
  border-radius: 12px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
  color: rgb(141, 92, 17);
  /* margin-bottom: 0.5rem; */
`;

export const StyledTime = styled.div`
  font-size: 5.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #2d180d;
  line-height: 1;
`;
