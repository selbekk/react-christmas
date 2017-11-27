import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OuterContainer = styled.header`
  background: #f3f3f3;
  border-top: 4px solid #a00;
  color: #666;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
  padding: 12px 24px;
`;

const LogoLink = styled(Link)`
  color: inherit;
  font-family: 'Covered By Your Grace', cursive;
  font-size: 1.5em;
  text-decoration: none;
`;

const SiteHeader = () => (
  <OuterContainer>
    <InnerContainer>
      <LogoLink to="/">
        A React Christmas
      </LogoLink>
    </InnerContainer>
  </OuterContainer>
);

export default SiteHeader;
