import Link from 'next/link';
import styled from 'styled-components';
import { LinkText } from './typography';
import BekkLogo from './icons/bekk-logo';
import * as colors from '../constants/colors';
import * as fonts from '../constants/fonts';
import * as breakpoints from '../constants/breakpoints';
import siteConfig from '../config';

const Container = styled.footer`
  background: ${colors.primary};
  border-top: 5px solid ${colors.secondary};
  color: ${colors.white};
  font-family: ${fonts.sansSerifFont};
  margin-top: 15px;
  padding: 20px;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1000px;
`;

const Column = styled.div`
  flex: 1 0 auto;
  width: 100%;

  ${breakpoints.mediumUp} {
    flex: 0 0 auto;
    width: calc(33% - 10px);
  }
`;

const WhiteLinkText = styled(LinkText)`
  color: white;
`;

const Heading = styled.h3`
  font-size: 18px;
  font-family: ${fonts.sansSerifFont};
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.25;
`;

const SmallText = styled.small`
  font-size: 14px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5em;
`;

const SiteFooter = () => {
  return (
    <Container>
      <InnerContainer>
        <Column>
          <Heading>
            Made with <span>🎅</span> in Oslo, Norway!
          </Heading>
          <Paragraph>
            <SmallText>
              All images are from Unsplash. Social media icons are from
              flaticon.com.
            </SmallText>
          </Paragraph>
          <Paragraph>
            <SmallText>
              We use a few cookies for tracking yo' ass.{' '}
              <WhiteLinkText href="/privacy">Read more here</WhiteLinkText>
            </SmallText>
          </Paragraph>
        </Column>
        {siteConfig.otherChristmasCalendars.length > 0 && (
        <Column>
          <Heading>Looking for more Christmas?</Heading>
          <Paragraph>Check out</Paragraph>
          <List>
            {siteConfig.otherChristmasCalendars.map(calendar => (
              <ListItem key={calendar}>
                <WhiteLinkText href={`https://${calendar}`}>
                  {calendar}
                </WhiteLinkText>
              </ListItem>
            ))}
          </List>
        </Column>
        )}

        <Column>
          <Heading>Proudly made by</Heading>
          <Link href="https://www.bekk.no">
            <a aria-label="Bekk">
              <BekkLogo style={{ maxWidth: '100px' }} />
            </a>
          </Link>
        </Column>
      </InnerContainer>
    </Container>
  );
};

export default SiteFooter;
