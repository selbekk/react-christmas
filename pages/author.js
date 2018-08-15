import Page from '../components/page';
import ContentContainer from '../components/content-container';
import {
  PageTitle,
  Paragraph,
  LeadParagraph,
  LinkText,
} from '../components/typography';
import Avatar from '../components/avatar';
import ArticleBody from '../components/article-body';
import SomeLink from '../components/some-link';
import GithubIcon from '../components/icons/github';
import TwitterIcon from '../components/icons/twitter';
import { monospaceFont } from '../constants/fonts';
import Center from '../components/center';

class AuthorPage extends React.Component {
  static getInitialProps = async context => {
    const { slug } = context.query;
    try {
      const author = await require(`../content/authors/${slug}.md`);
      return {
        author,
        notFound: false,
      };
    } catch (e) {
      return {
        author: null,
        notFound: true,
      };
    }
  };
  render() {
    const { author, notFound } = this.props;
    if (notFound) {
      return (
        <Page title="Post not found">
          <ContentContainer>
            <Center>
              <PageTitle>Sorry, couldn't find that author</PageTitle>
              <LeadParagraph>
                We don't know what happened here - all we can say is that it
                most likely is <em>your</em> fault.
              </LeadParagraph>
              <Paragraph>
                <LinkText href="/">Go back to the front page</LinkText> and
                navigate from there.
              </Paragraph>
            </Center>
          </ContentContainer>
        </Page>
      );
    }
    return (
      <Page title={`Author: ${author.name}`}>
        <ContentContainer>
          <Center>
            <PageTitle>{author.name}</PageTitle>
            {author.image && <Avatar src={author.image} />}
            <LeadParagraph>{author.oneliner}</LeadParagraph>
            {author.github && (
              <LinkText
                href={`https://www.github.com/${author.github}`}
                style={{ marginRight: 20 }}
              >
                <GithubIcon width="21" /> @{author.github}
              </LinkText>
            )}
            {author.twitter && (
              <LinkText href={`https://www.twitter.com/${author.twitter}`}>
                <TwitterIcon style={{ width: 21 }} /> @{author.twitter}
              </LinkText>
            )}
          </Center>
          <ArticleBody dangerouslySetInnerHTML={{ __html: author.__content }} />
        </ContentContainer>
      </Page>
    );
  }
}

export default AuthorPage;
