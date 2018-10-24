import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import calculateReadingTime from 'reading-time';

import ContentContainer from '../components/content-container';
import {
  PageTitle,
  LeadParagraph,
  Paragraph,
  LinkText,
} from '../components/typography';
import Page from '../components/page';
import ArticleBody from '../components/article-body';
import PostNavigation from '../components/post-navigation';
import RelatedLinks from '../components/related-links';
import AuthorInfo from '../components/author-info';
import BackgroundImage from '../components/background-image';
import Center from '../components/center';

const PostPage = props => {
  const { notFound, author, authorSlug, post, year, date, readingTime } = props;
  const today = new Date();
  const releaseDate = new Date(year, 11, date);
  const tooSoon = today < releaseDate;

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
    <Page title={post.title}>
      <BackgroundImage src={post.image}>
        <ContentContainer>
          <Center>
            <PageTitle>{post.title}</PageTitle>
          </Center>
        </ContentContainer>
      </BackgroundImage>
      <ContentContainer>
        <PostNavigation year={year} date={date} />
        {post.lead && <LeadParagraph>{post.lead}</LeadParagraph>}
        {author && (
          <AuthorInfo
            author={author}
            slug={authorSlug}
            readingTime={readingTime}
          />
        )}
        <ArticleBody dangerouslySetInnerHTML={{ __html: post.__content }} />
        <PostNavigation year={year} date={date} />
      </ContentContainer>
      <RelatedLinks links={post.links} />
    </Page>
  );
};

PostPage.getInitialProps = async context => {
  const { year, date } = context.query;
  const paddedDate = date.padStart(2, '0');
  try {
    const post = await require(`../content/${year}/${paddedDate}.md`);
    const authorSlug = post.author.replace(/\s+/g, '-').toLowerCase();
    const author = await require(`../content/authors/${authorSlug}.md`);
    post.image =
      post.image ||
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a61f93e3d2e1f3f36b8725a5fde5ef4&auto=format&fit=crop&w=2249&q=80';
    return {
      year: Number(year),
      date: Number(date),
      post,
      author,
      authorSlug,
      readingTime: calculateReadingTime(post.__content).text,
    };
  } catch (e) {
    return {
      year: Number(year),
      date: Number(date),
      notFound: true,
    };
  }
};
export default PostPage;
