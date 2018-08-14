import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

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

const PostPage = props => {
  const { notFound, author, post, year, date } = props;
  const today = new Date();
  const releaseDate = new Date(year, 11, date);
  const tooSoon = today < releaseDate;

  if (tooSoon) {
    return (
      <Page title="Post not available yet">
        <ContentContainer>
          <PageTitle>Sorry, you have to wait a bit longer</PageTitle>
          <LeadParagraph>
            We're happy to see you're so eager - but you have to wait about{' '}
            {distanceInWordsToNow(releaseDate)}.
          </LeadParagraph>
          <Paragraph>
            <LinkText href="/">Go back</LinkText> to the front page and navigate
            from there.
          </Paragraph>
        </ContentContainer>
      </Page>
    );
  }
  if (notFound) {
    return (
      <Page title="Post not found">
        <ContentContainer>
          <PageTitle>Sorry, couldn't find that post</PageTitle>
          <LeadParagraph>
            Looks like you're trying to access a post that isn't available.
          </LeadParagraph>
          <Paragraph>
            <LinkText href="/">Go back</LinkText> to the front page and navigate
            from there.
          </Paragraph>
        </ContentContainer>
      </Page>
    );
  }
  return (
    <Page>
      <ContentContainer>
        <PostNavigation year={year} date={date} />
        <PageTitle>{post.title}</PageTitle>
        {post.lead && <LeadParagraph>{post.lead}</LeadParagraph>}
        {author && <AuthorInfo author={author} />}
        {/* TODO: Add meta-stuff! */}
        <ArticleBody dangerouslySetInnerHTML={{ __html: post.__content }} />
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
    return {
      year: Number(year),
      date: Number(date),
      post,
      author,
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
