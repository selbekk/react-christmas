import { SectionTitle, Paragraph, LinkText } from '../components/typography';

const WhatIsThis = () => (
  <>
    <SectionTitle>What is Security.Christmas?</SectionTitle>
    <Paragraph>
      This site aims to{' '}
      <strong>educate, entertain and get people interested in Security</strong>.
      It's for Christians, Muslims, Jews, Mormons and even the odd atheist!
    </Paragraph>
    <Paragraph>
      This page and its content is created by the Security Group at Bekk Consulting.
    </Paragraph>
    <Paragraph>
      You can find the
      source code of this project on{' '}
      <LinkText href="https://github.com/stian-fredrikstad/security-christmas">
        GitHub
      </LinkText>, if you want to fix a typo or improve the article for other
      readers.
    </Paragraph>
  </>
);

export default WhatIsThis;
