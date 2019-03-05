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
  background: white url(${props => props.source}) center center no-repeat;
  background-size: cover;
  filter: ${props =>
    props.loaded === 'high-res'
      ? 'brightness(0.8)'
      : props.loaded === 'low-res'
      ? ' brightness(0.8) blur(5px)'
      : 'none'};
  transform: ${props => (props.loaded === 'low-res' ? 'scale(1.05)' : 'none')};
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-out;
  opacity: ${props => (props.loaded ? 1 : 0)};
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
    width: 1500
  };

  componentDidMount() {
    this.setState({ width: Math.max(window.innerWidth, 1500) });
  }

  render() {
    const { quality, width } = this.state;
    const { children, src } = this.props;

    const isUnsplash = src.includes('unsplash.com');
    const baseUrl = src.substring(0, src.indexOf('?'));
    const lowResSrc = `${baseUrl}?q=1&w=100`;
    const highResSrc = `${baseUrl}?q=80&w=${width}`;

    return (
      <Container>
        {isUnsplash && (
          <ProgressiveImage placeholderSource={lowResSrc} source={highResSrc}>
            {imageProps => <Background {...imageProps} />}
          </ProgressiveImage>
        )}
        {!isUnsplash && <Background source={src} loaded={true} />}
        <Content>{children}</Content>
      </Container>
    );
  }
}
export default BackgroundImage;
