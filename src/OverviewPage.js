import React from "react";
import styled from "styled-components";
import posts from "./posts";
import Card from "./Card";
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
  <CardList>
    {posts.map((post, idx) => (
      <Card key={idx} date={idx + 1} notYetAvailable={now.getDate() < idx + 1 && isProduction} />
    ))}
  </CardList>
);
export default OverviewPage;
