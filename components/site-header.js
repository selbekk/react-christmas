import Link from 'next/link';
import styled from 'styled-components';

import * as colors from '../constants/colors';
import * as fonts from '../constants/fonts';

import ChristmasTree from './icons/christmas-tree';

const Container = styled.header`
  background-color: ${colors.white};
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
const SiteTitle = styled.h1``;
const LinkText = styled.a`
  color: ${colors.black};
  cursor: pointer;
  display: block;
  font-family: ${fonts.monospaceFont};
  text-decoration: none;
  padding: 5px 0 10px;
`;

const SiteHeader = () => (
  <Container>
    <SiteTitle>
      <Link prefetch href="/">
        <LinkText>
          react <ChristmasTree style={{ width: '1.5em' }} /> christmas
        </LinkText>
      </Link>
    </SiteTitle>
  </Container>
);

export default SiteHeader;
