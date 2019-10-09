import Page from '~/components/page';
import ContentContainer from '~/components/content-container';
import {
  ExternalLink,
  PageTitle,
  Paragraph,
  LeadParagraph,
  LinkText
} from '~/components/typography';
import Avatar from '~/components/avatar';
import AvatarContainer from '~/components/avatar-container';
import ArticleBody from '~/components/article-body';
import GithubIcon from '~/components/icons/github';
import TwitterIcon from '~/components/icons/twitter';
import Center from '~/components/center';

function AuthorNotFound() {
  return (
    <Page title="Author not found">
      <ContentContainer>
        <Center>
          <PageTitle>Sorry, couldn't find that author</PageTitle>
          <LeadParagraph>
            We don't know what happened here - all we can say is that it most
            likely is <em>your</em> fault.
          </LeadParagraph>
          <Paragraph>
            <LinkText href="/">Go back to the front page</LinkText> and navigate
            from there.
          </Paragraph>
        </Center>
      </ContentContainer>
    </Page>
  );
}

function AuthorPage(props) {
  const { author, notFound } = props;
  if (notFound) {
    return <AuthorNotFound />;
  }
  return (
    <Page
      title={`Author: ${author.name}`}
      description={author.oneliner}
      ogImage={author.image}
    >
      <ContentContainer>
        <Center>
          <PageTitle>{author.name}</PageTitle>
          {author.image && (
            <AvatarContainer>
              <Avatar src={author.image} />
            </AvatarContainer>
          )}
          <LeadParagraph>{author.oneliner}</LeadParagraph>
          {author.github && (
            <ExternalLink
              href={`https://www.github.com/${author.github}`}
              style={{ marginRight: 20 }}
            >
              <GithubIcon width="21" /> @{author.github}
            </ExternalLink>
          )}
          {author.twitter && (
            <ExternalLink href={`https://www.twitter.com/${author.twitter}`}>
              <TwitterIcon style={{ width: 21 }} /> @{author.twitter}
            </ExternalLink>
          )}
        </Center>
        <ArticleBody dangerouslySetInnerHTML={{ __html: author.html }} />
      </ContentContainer>
    </Page>
  );
}
AuthorPage.getInitialProps = async context => {
  const { query } = context;
  try {
    const {
      default: { html, attributes }
    } = await import(`../../content/authors/${query.slug}.md`);
    const author = {
      html,
      ...attributes
    };
    return {
      author,
      notFound: false
    };
  } catch (e) {
    return {
      author: null,
      notFound: true
    };
  }
};

export default AuthorPage;
