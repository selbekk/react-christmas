import Page from '../components/page';
import ContentContainer from '../components/content-container';
import Center from '../components/center';
import {
  PageTitle,
  LeadParagraph,
  Paragraph,
  LinkText,
} from '../components/typography';
import DocumentWithStyledComponents from './_document';

const PrivacyPage = () => (
  <Page title="Privacy policy">
    <ContentContainer>
      <Center>
        <PageTitle>Privacy policy</PageTitle>
        <LeadParagraph>TL;DR: We use Google Analytics.</LeadParagraph>
      </Center>
      <Paragraph>
        Privacy is important to me, but I don't really need to track a ton of
        information about you. I use Google Analytics to track information about
        where you're from and what kind of device you're using etc - but{' '}
        <strong>that's it</strong>.
      </Paragraph>
      <Paragraph>
        If you need to get in touch with me, please do so on{' '}
        <LinkText href="https://www.twitter.com/selbekk">Twitter</LinkText>, or
        write me a good ol' fashioned{' '}
        <LinkText href="mailto:kristofer@selbekk.io">email</LinkText>.
      </Paragraph>
      <Paragraph>
        Not sure what else to write here. Hope you enjoy your day! 👋
      </Paragraph>
    </ContentContainer>
  </Page>
);

export default PrivacyPage;
