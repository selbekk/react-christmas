import Page from '../components/page';
import ContentContainer from '../components/content-container';
import Center from '../components/center';
import {
  PageTitle,
  LeadParagraph,
  Paragraph,
  ExternalLink
} from '../components/typography';

const PrivacyPage = () => (
  <Page title="Privacy policy">
    <ContentContainer>
      <Center>
        <PageTitle>Privacy policy</PageTitle>
        <LeadParagraph>TL;DR: We use Google Analytics.</LeadParagraph>
      </Center>
      <Paragraph>
        Privacy is important to us, but we don't really need to track a ton of
        information about you. We use Google Analytics to track information
        about where you're from and what kind of device you're using etc - but{' '}
        <strong>that's it</strong>.
      </Paragraph>
      <Paragraph>
        If you need to get in touch with us, please do so on{' '}
        <ExternalLink href="https://www.twitter.com/selbekk">
          Twitter
        </ExternalLink>
        , or write us a good ol' fashioned{' '}
        <ExternalLink href="mailto:kristofer@selbekk.io">email</ExternalLink>.
      </Paragraph>
      <Paragraph>
        Not sure what else to write here. Hope you enjoy your day! 👋
      </Paragraph>
    </ContentContainer>
  </Page>
);

export default PrivacyPage;
