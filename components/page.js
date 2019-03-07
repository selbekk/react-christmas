import { string, node } from 'prop-types';
import { withRouter } from 'next/router';
import Head from './head';
import SiteWrapper from './site-wrapper';
import SiteHeader from './site-header';
import SiteContent from './site-content';
import SiteFooter from './site-footer';
import GlobalStyles from '../shared/global-styles';
import usePageTracking from '../hooks/usePageTracking';

const Page = props => {
  usePageTracking(props.router.asPath);

  return (
    <>
      <Head title={props.title} description={props.description} />
      <GlobalStyles />
      <SiteWrapper>
        <SiteHeader />
        <SiteContent>{props.children}</SiteContent>
        <SiteFooter />
      </SiteWrapper>
    </>
  );
};

Page.propTypes = {
  children: node.isRequired,
  description: node,
  title: string
};

export default withRouter(Page);
