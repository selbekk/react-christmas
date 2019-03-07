import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import siteConfig from '../config';

export default function usePageTracking(path, debug) {
  const [isInitialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!siteConfig.googleAnalyticsTrackingId) {
      return;
    }
    if (!isInitialized) {
      ReactGA.initialize(siteConfig.googleAnalyticsTrackingId, {
        debug
      });
      setInitialized(true);
    }
    ReactGA.pageview(path);
  }, [path]);
}
