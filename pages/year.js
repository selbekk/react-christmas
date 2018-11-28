import React from 'react';
import Page from '../components/page';
import ArticleList from '../components/article-list';
import ContentContainer from '../components/content-container';
import {
  PageTitle,
  LeadParagraph,
  LinkText,
  Paragraph,
} from '../components/typography';
import siteConfig from '../config';

const YearPage = props => {
  const { year } = props;
  const isWayInThePast = year < siteConfig.firstYearOfContent;
  const isWayInTheFuture = year > new Date().getFullYear();
  const isValidYear = !isWayInThePast && !isWayInTheFuture;
  return (
    <Page title={`Posts from ${year}`}>
      <PageTitle centerText>Posts from {year}</PageTitle>
      {isWayInThePast && (
        <ContentContainer>
          <LeadParagraph>
            Woah there pilgrim! ✋ We only got started in 2017, so that's all
            the posts we have. 🤷‍
          </LeadParagraph>
          <Paragraph>
            If you want, you can go check out{' '}
            <LinkText href="/year?year=2017" as="/2017">
              2017
            </LinkText>{' '}
            if you want - it was a pretty cool year! 😎
          </Paragraph>
        </ContentContainer>
      )}
      {isWayInTheFuture && (
        <ContentContainer>
          <LeadParagraph>
            Hold your cyber monkes from space there compadre! 👽🐵 You can't
            visit the future! We haven't gotten that far yet. 😞
          </LeadParagraph>
          <Paragraph>
            If you want, you can check out the{' '}
            <LinkText href="/">front page</LinkText>, which will guide you to
            the content we do have available.
          </Paragraph>
        </ContentContainer>
      )}
      {isValidYear && <ArticleList year={props.year} />}
    </Page>
  );
};

YearPage.getInitialProps = context => ({
  year: Number(context.query.year),
});

export default YearPage;
