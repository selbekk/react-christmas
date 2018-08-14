import styled from 'styled-components';
import { PageTitle } from './typography';
import * as colors from '../constants/colors';

const Container = styled.div`
  height: 50vh;
  max-height: 500px;
  position: relative;
`;

const Background = styled.div`
  align-items: flex-end;
  background: white url(${props => props.src}) center center no-repeat;
  background-size: cover;
  filter: brightness(0.8);
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  align-items: flex-end;
  background-size: cover;
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;

  & ${PageTitle} {
    color: ${colors.white};
  }
`;

const BackgroundImage = props => (
  <Container>
    <Background src={props.src} />
    <Content>{props.children}</Content>
  </Container>
);

export default BackgroundImage;
