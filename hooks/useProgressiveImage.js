import { useState, useEffect } from 'react';

export default function useProgressiveImage({ source, placeholderSource }) {
  const [loaded, setLoaded] = useState(false);
  const [currentSource, setCurrentSource] = useState('');

  useEffect(() => {
    setCurrentSource('');

    const lowResImage = new Image();
    lowResImage.onload = () => {
      // if the high res version is loaded already for some reason (cache?),
      // ignore the result of the low-res load event
      if (loaded === 'high-res') {
        return;
      }
      setLoaded('low-res');
      setCurrentSource(placeholderSource);
    };
    lowResImage.src = placeholderSource;

    if (source) {
      // Load the high res version in the background
      const highResImage = new Image();
      highResImage.onload = () => {
        setLoaded('high-res');
        setCurrentSource(source);
      };
      highResImage.src = source;
    }
  }, [source, placeholderSource]);
  return { source: currentSource, loaded: loaded };
}
