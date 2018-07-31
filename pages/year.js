import React from 'react';
import Page from '../components/page';
import ArticleList from '../components/article-list';
import WhatIsThis from '../components/what-is-this';
import ContentContainer from '../components/content-container';
import HorizontalRule from '../components/horizontal-rule';
import { PageTitle } from '../components/typography';

const YearPage = props => (
  <Page title="react.christmas">
    <PageTitle centerText>Posts from {props.year}</PageTitle>
    <ArticleList year={props.year} />

    <ContentContainer>
      <HorizontalRule />
      <WhatIsThis />
    </ContentContainer>
  </Page>
);

YearPage.getInitialProps = context => ({
  year: context.query.year,
});

export default YearPage;
