import Link from 'next/link';
import styled from 'styled-components';
import extractDomain from 'extract-domain';
import { SectionTitle } from './typography';
import ContentContainer from './content-container';
import * as colors from '../constants/colors';
import * as fonts from '../constants/fonts';

const List = styled.ul`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Title = styled.div`
  font-family: ${fonts.sansSerifFont};
  font-weight: bold;
  font-size: 1.2em;
  transition: all 0.1s ease-out;
  padding: 10px;
`;
const ClickTarget = styled.a`
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  overflow: hidden;
  color: inherit;
  display: block;
  height: 100%;
  text-decoration: none;
  transition: all 0.1s ease-out;

  &:focus ${Title}, &:hover ${Title} {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

const Domain = styled.div`
  color: #666;
  font-size: 14px;
  text-transform: lowercase;
  margin: 0 10px;
`;

const Description = styled.p`
  font-family: ${fonts.serifFont};
  font-size: 16px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.85);
  margin: 10px;
`;

const RelatedLinks = props => {
  const { links } = props;
  if (!links || !links.length) {
    return null;
  }
  return (
    <ContentContainer size="large">
      <SectionTitle>Relevant articles</SectionTitle>
      <List>
        {links.map(link => (
          <li key={link.title}>
            <Link href={link.link} passHref={true}>
              <ClickTarget>
                <Title>{link.title}</Title>
                <Domain>{extractDomain(link.link)}</Domain>
                <Description>{link.body}</Description>
              </ClickTarget>
            </Link>
          </li>
        ))}
      </List>
    </ContentContainer>
  );
};

RelatedLinks.defaultProps = {
  links: []
};

export default RelatedLinks;
