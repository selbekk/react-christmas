import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'next/router';
import siteConfig from '../config';

class PageTracking extends React.Component {
    componentDidMount() {
        if (!siteConfig.googleAnalyticsTrackingId) {
            return;
        }
        ReactGA.initialize(siteConfig.googleAnalyticsTrackingId, { debug: this.props.debug });
        ReactGA.pageview(this.props.router.asPath);
    }
    componentDidUpdate(prevProps) {
        if (!siteConfig.googleAnalyticsTrackingId) {
            return;
        }
        if (prevProps.router.asPath !== this.props.router.asPath) {
            ReactGA.pageview(this.props.router.asPath);
        }
    }
    render() {
        return this.props.children;
    }
}

export default withRouter(PageTracking);
