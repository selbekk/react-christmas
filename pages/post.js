import ContentContainer from '../components/content-container';
import {
  PageTitle,
  LeadParagraph,
  Paragraph,
  LinkText,
} from '../components/typography';
import Page from '../components/page';
import ArticleBody from '../components/article-body';

const PostPage = props => {
  const { notFound, post } = props;
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
        <PageTitle>{post.title}</PageTitle>
        {post.lead && <LeadParagraph>{post.lead}</LeadParagraph>}
        {/* TODO: Add meta-stuff! */}
        <ArticleBody dangerouslySetInnerHTML={{ __html: post.__content }} />
      </ContentContainer>
    </Page>
  );
};

PostPage.getInitialProps = async context => {
  const { year, date } = context.query;
  let post = null;
  try {
    post = await require(`../content/${year}/${date}.md`);
    return {
      year,
      date,
      post,
    };
  } catch (e) {
    console.error('Could not find that post', e);
    return { notFound: true };
  }
};
export default PostPage;
