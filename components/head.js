import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
import siteConfig from '../constants/config';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || siteConfig.name}</title>
    <meta
      name="description"
      content={props.description || siteConfig.ogDescription}
    />
    <link rel="icon" sizes="192x192" href="/static/favicon.png" />
    <link rel="apple-touch-icon" href="/static/favicon.png" />
    <link rel="icon" href="/static/favicon.png" />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ff0000" />
    <meta property="og:url" content={props.url || siteConfig.url} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || siteConfig.ogDescription}
    />
    <meta name="twitter:site" content={props.url || siteConfig.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content={props.ogImage || `${siteConfig.url}/static/og-image.jpg`}
    />
    <meta
      property="og:image"
      content={props.ogImage || `${siteConfig.url}/static/og-image.jpg`}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
