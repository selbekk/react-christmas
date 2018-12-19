import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import calculateReadingTime from 'reading-time';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import ContentContainer from '../components/content-container';
import {
  PageTitle,
  LeadParagraph,
  Paragraph,
  LinkText
} from '../components/typography';
import Page from '../components/page';
import ArticleBody from '../components/article-body';
import PostNavigation from '../components/post-navigation';
import RelatedLinks from '../components/related-links';
import AuthorInfo from '../components/author-info';
import BackgroundImage from '../components/background-image';
import Center from '../components/center';
import FadeSlideIn from '../components/fade-slide-in';

const PostPage = props => {
  const { notFound, post, year, date, readingTime, router } = props;
  const today = new Date();
  const hackerMode = router.query.mode === 'hacker';
  const releaseDate = new Date(Date.UTC(year, 11, date, 0, 0, 0));
  const tooSoon = today < releaseDate && !hackerMode;

  if (tooSoon) {
    return (
      <Page title="Post not available yet">
        <ContentContainer>
          <Center>
            <PageTitle>Sorry, you have to wait a bit longer</PageTitle>
            <LeadParagraph>
              We're happy to see you're so eager - but you have to wait{' '}
              {distanceInWordsToNow(releaseDate)}.
            </LeadParagraph>
            <Paragraph>
              <LinkText href="/">Go back</LinkText> to the front page and
              navigate from there.
            </Paragraph>
          </Center>
        </ContentContainer>
      </Page>
    );
  }
  if (notFound) {
    return (
      <Page title="Post not found">
        <ContentContainer>
          <Center>
            <PageTitle>Sorry, couldn't find that post</PageTitle>
            <LeadParagraph>
              Looks like you're trying to access a post that isn't available.
            </LeadParagraph>
            <Paragraph>
              <LinkText href="/">Go back</LinkText> to the front page and
              navigate from there.
            </Paragraph>
          </Center>
        </ContentContainer>
      </Page>
    );
  }
  return (
    <Page title={post.title} description={post.lead} ogImage={post.image}>
      <div />
      <FadeSlideIn>
        <BackgroundImage src={post.image}>
          <ContentContainer>
            <Center>
              <PageTitle>{post.title}</PageTitle>
            </Center>
          </ContentContainer>
        </BackgroundImage>
      </FadeSlideIn>
      <FadeSlideIn delay=".3s">
        <ContentContainer>
          <PostNavigation year={year} date={date} />
          {post.lead && <LeadParagraph>{post.lead}</LeadParagraph>}
          {post.author && (
            <AuthorInfo authors={post.author} readingTime={readingTime} />
          )}
          <ArticleBody dangerouslySetInnerHTML={{ __html: post.body }} />
          <PostNavigation year={year} date={date} />
        </ContentContainer>
      </FadeSlideIn>
      <RelatedLinks links={post.links} />
    </Page>
  );
};

PostPage.getInitialProps = async context => {
  const { req, query } = context;

  const paddedDate = query.date.padStart(2, '0');
  try {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const response = await fetch(`${baseUrl}/api/${query.year}/${paddedDate}`);
    const post = await response.json();

    post.image =
      post.image ||
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a61f93e3d2e1f3f36b8725a5fde5ef4&auto=format&fit=crop&w=2249&q=80';
    return {
      year: Number(query.year),
      date: Number(query.date),
      post,
      readingTime: calculateReadingTime(post.body).text
    };
  } catch (e) {
    return {
      year: Number(query.year),
      date: Number(query.date),
      notFound: true
    };
  }
};
export default withRouter(PostPage);
