import styled from 'styled-components';
import { ICountdownPageProps } from '.';
import { devices } from '../../../utils';

const StyledCountdownPage = styled.section<ICountdownPageProps>`
  background: transparent no-repeat;
  background-size: cover;
  background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_320/v1639940064/js-tasks/countdown/new-year.webp');
  background-position: center;

  @media ${devices.mobileL} {
    background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_425/v1639939906/js-tasks/countdown/new-year-mobileL.webp');
  }

  @media ${devices.tablet} {
    background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_768/v1639939527/js-tasks/countdown/new-year-tablet.webp');
  }

  @media ${devices.laptopL} {
    background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_1440/v1639939329/js-tasks/countdown/new-year-laptopL.webp');
  }

  @media ${devices.desktop} {
    background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_2560/v1639938644/js-tasks/countdown/new-year-desktop.webp');
  }
`;

export default StyledCountdownPage;
