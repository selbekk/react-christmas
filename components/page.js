import { string, node } from 'prop-types';
import Head from './head';
import SiteHeader from './site-header';
import globalStyles from '../shared/global-styles';

const Page = props => {
  // Inject global styles all over the place
  globalStyles();
  return (
    <div>
      <Head title={props.title} description={props.description} />
      <SiteHeader />
      <main>{props.children}</main>
    </div>
  );
};

Page.propTypes = {
  children: node.isRequired,
  description: node,
  title: string,
};

export default Page;
