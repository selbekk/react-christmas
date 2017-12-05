import React, { Fragment } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import posts from './posts';
import Card from './Card';
import * as breakpoints from './breakpoints';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;

  ${breakpoints.mediumUp} {
    flex-direction: row;
  }
`;

const now = new Date();
const isProduction = process.env.NODE_ENV === 'production';

const OverviewPage = () => (
  <Fragment>
    <Helmet>
      <meta property="og:title" content="A React Christmas" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://react.christmas" />
      <meta property="og:description" content="24 days of React tips and tricks to get in that declarative spirit" />
      <title>A React Christmas</title>
    </Helmet>

    <CardList>
      {posts.map((post, idx) => (
        <Card key={idx} date={idx + 1} notYetAvailable={now.getDate() < idx + 1 && isProduction} />
      ))}
    </CardList>
  </Fragment>
);
export default OverviewPage;
