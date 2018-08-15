import styled from 'styled-components';
import ContentContainer from './content-container';
import { Paragraph, LinkText } from './typography';
import Center from './center';
import * as colors from '../constants/colors';
import * as fonts from '../constants/fonts';

const Container = styled.footer`
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  font-family: ${fonts.sansSerifFont};
  padding: 20px;
`;

const SiteFooter = () => {
  return (
    <Container>
      <Center>
        <p>
          Made with <span>🎅</span> in Oslo, Norway!
        </p>
        <p>
          <small>
            All images are from Unsplash. Social media icons are from
            flaticon.com.
            <br />
            We use a few cookies for tracking yo' ass.{' '}
            <LinkText style={{ color: colors.white }} href="/privacy">
              Read more here
            </LinkText>
          </small>
        </p>
      </Center>
    </Container>
  );
};

export default SiteFooter;
