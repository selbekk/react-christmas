import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as breakpoints from './breakpoints';

const OuterContainer = styled.li`
  background: linear-gradient(to right, #f00, #d00);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  flex: 0 0 calc(50% - 12px);
  margin: 0 0 24px 0;
  padding: 12px;
  transition: all .1s ease-out;
  will-change: box-shadow transform;

  &:focus, &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
      outline: none;
      transform: translate(-1px, -1px);
  }

  ${breakpoints.mediumUp} {
    flex-basis: 23%;
  }

  ${props => props.notYetAvailable && `
    background: linear-gradient( to right, #ccc, #bbb);
  `}
`;

const InnerContainer = styled(Link)`
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 120px;
  text-decoration: none;
`;

const Number = styled.div`
  color: #f0f0f0;
  font-size: 5em;
`;

const Card = props => (
  <OuterContainer notYetAvailable={props.notYetAvailable}>
    <InnerContainer to={`/${props.date}`}>
      <Number>{props.date}.</Number>
    </InnerContainer>
  </OuterContainer>
);

export default Card;
