import React from "react";
import styled from "styled-components";
import posts from "./posts";
import Card from "./Card";
import NotYetAvailable from './NotYetAvailable';
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

const availableFrom = new Date(2017, 11, 1);
const now = new Date();
const isAvailable = availableFrom < now
  || process.env.NODE_ENV !== 'production';

const OverviewPage = () => {
  if (availableFrom > now) {
    return (
      <NotYetAvailable />
    );
  }
  return (
    <CardList>
      {posts.map((post, idx) => (
        <Card key={idx} date={idx + 1} notYetAvailable={now.getDate() < idx + 1 || !isAvailable} />
      ))}
    </CardList>
  );
};

export default OverviewPage;
