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
      </Center>
      <Paragraph>
        Privacy is important to us, and we do not want to track any information about you.
      </Paragraph>
    </ContentContainer>
  </Page>
);

export default PrivacyPage;
