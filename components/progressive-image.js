import React, { Component } from 'react';

class ProgressiveImage extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    if (this.props.highResSrc) {
      // Load the high res version in the background
      const highResImage = new Image();
      highResImage.addEventListener('load', () =>
        this.setState({ loaded: true })
      );
      highResImage.src = this.props.highResSrc;
    }
  }
  render() {
    const { children, highResSrc, src, ...rest } = this.props;

    const { loaded } = this.state;
    const loadedSrc = loaded ? highResSrc : src;
    return children({ loaded, src: loadedSrc });
  }
}

export default ProgressiveImage;
