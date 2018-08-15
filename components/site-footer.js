import styled from 'styled-components';
import ContentContainer from './content-container';
import { Paragraph, LinkText } from './typography';
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
      Made with <span>🎅</span> in Oslo, Norway!
    </Container>
  );
};

export default SiteFooter;
