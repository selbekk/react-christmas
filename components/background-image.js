import React, { Component } from 'react';
import styled from 'styled-components';
import { PageTitle } from './typography';
import ProgressiveImage from './progressive-image';
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
  filter: ${props => (props.loaded ? 'brightness(0.8)' : 'none')};
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-out;
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

class BackgroundImage extends Component {
  state = {
    width: 500,
    quality: 1
  };

  componentDidMount() {
    this.setState({ width: window.innerWidth, quality: 80 });
  }

  render() {
    const { quality, width } = this.state;

    const baseUrl = this.props.src.substring(0, this.props.src.indexOf('?'));
    const lowResSrc = `${baseUrl}?q=${quality}&w=${width}`;
    const highResSrc = `${baseUrl}?q=${quality}&w=${width}`;

    return (
      <Container>
        <ProgressiveImage src={lowResSrc} highResSrc={highResSrc}>
          {imageProps => <Background {...imageProps} />}
        </ProgressiveImage>
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}
export default BackgroundImage;
