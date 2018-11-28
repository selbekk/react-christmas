import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const FadeSlideIn = styled.div`
  animation: .3s ease-out ${props => props.delay} forwards ${fadeIn};
  opacity: 0;
`;

export default FadeSlideIn;
