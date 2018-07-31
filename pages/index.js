import React from 'react';
import Page from '../components/page';
import ArticleList from '../components/article-list';
import { LinkText } from '../components/typography';
import WhatIsThis from '../components/what-is-this';
import ContentContainer from '../components/content-container';
import HorizontalRule from '../components/horizontal-rule';

const Home = () => (
  <Page title="react.christmas">
    <ArticleList year="2018" />
    <ContentContainer>
      <HorizontalRule />
      <WhatIsThis />
    </ContentContainer>
    <footer>
      <ContentContainer>
        Looking for last year's edition?{' '}
        <LinkText href="/2017">Go here</LinkText>
      </ContentContainer>
    </footer>
  </Page>
);

export default Home;
