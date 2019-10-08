import React from 'react';
import NextHead from 'next/head';
import { withRouter } from 'next/router';
import { string } from 'prop-types';
import siteConfig from '../config';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || siteConfig.name}</title>
    <meta
      name="description"
      content={props.description || siteConfig.ogDescription}
    />
    <link rel="icon" sizes="192x192" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <link rel="icon" href="/favicon.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ff0000" />
    <meta
      property="og:url"
      content={props.url || siteConfig.domain + props.router.asPath}
    />
    <meta property="og:title" content={props.title || siteConfig.name} />
    <meta
      property="og:description"
      content={props.description || siteConfig.ogDescription}
    />
    <meta name="twitter:site" content={props.url || siteConfig.domain} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content={props.ogImage || `${siteConfig.domain}/og-image.jpg`}
    />
    <meta
      property="og:image"
      content={props.ogImage || `${siteConfig.domain}/og-image.jpg`}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default withRouter(Head);
