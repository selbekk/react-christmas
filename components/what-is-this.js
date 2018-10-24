import { SectionTitle, Paragraph, LinkText } from '../components/typography';

const WhatIsThis = () => (
  <>
    <hr />
    <SectionTitle>What is React.Christmas?</SectionTitle>
    <Paragraph>
      This site aims to{' '}
      <strong>educate, entertain and get people interested in React</strong>.
      It's for Christians, Muslims, Jews, Mormons and even the odd atheist!
    </Paragraph>
    <Paragraph>
      This page and its content is created by me - Kris Selbekk, a simple
      Norwegian that enjoys writing about React, JavaScript and a slew of other
      topics.
    </Paragraph>
    <Paragraph>
      You can find me on Twitter if you want to say hello, and you can find the
      source code of this project on{' '}
      <LinkText href="https://github.com/selbekk/react-christmas">
        GitHub
      </LinkText>
      , if you want to fix a typo or improve the article for other readers.
    </Paragraph>
  </>
);

export default WhatIsThis;
