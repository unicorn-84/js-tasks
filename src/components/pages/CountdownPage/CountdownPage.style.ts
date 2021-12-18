import styled from 'styled-components';
import { ICountdownPageProps } from '.';

const StyledCountdownPage = styled.section<ICountdownPageProps>`
  background: transparent no-repeat;
  background-position: left center;
  background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_1920/v1639772786/js-tasks/countdown/happy-new-year-2022-desktop.webp');
  background-size: cover;

  @media (max-width: 1024px) {
    background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_1024/v1639772760/js-tasks/countdown/happy-new-year-2022-laptop.webp');
    background-position: left;
  }

  @media (max-width: 768px) {
    background-image: url('https://res.cloudinary.com/unicorn84/image/upload/c_scale,q_auto,w_768/v1639772684/js-tasks/countdown/happy-new-year-2022-tablet.webp');
    background-position: center;
  }
`;

export default StyledCountdownPage;
