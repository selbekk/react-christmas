import Link from 'next/link';
import { withRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';

import * as colors from '../constants/colors';

const Tree = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1em;
  list-style: none;
  margin: 10px auto 0;
  max-width: 1000px;
  padding: 0;
`;

const fadeIn = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const Leaf = styled.li`
  width: 100%;
  animation: 0.5s ${props => Number(props.index) * 0.03}s ease-out forwards
    ${fadeIn};
  opacity: 0;
`;
const Content = styled.a`
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  font-size: 48px;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  transition: all 0.1s ease-out;
  user-select: none;
  width: 100%;

  ${props =>
    props.isAvailable &&
    `
    &:focus,
    &:hover {
      background-color: ${colors.primaryDark};
      transform: scale(1.05);
    }

    &:visited {
      filter: brightness(0.5);
    }
  `}

  ${props => props.isToday && `filter: saturate(1.4)`}
  ${props =>
    !props.isAvailable &&
    `filter: brightness(0.5);
    pointer-events: none;
    cursor: normal;
    > span {
      filter: blur(2px);
    }
    `}
`;

const daysOfChristmas = new Array(24).fill().map((_, i) => `${i + 1}`);

const utcDate = (date = new Date()) => {
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
};
const ArticleList = props => {
  const today = utcDate();
  const hackerMode = props.router.query.mode === 'hacker';
  return (
    <Tree>
      {daysOfChristmas.map(day => {
        const releaseDate = utcDate(new Date(Number(props.year), 11, day));
        const isAvailable = today > releaseDate || hackerMode;
        const isToday =
          today.getFullYear() === Number(props.year) &&
          today.getMonth() === 11 &&
          today.getDate() === day;
        return (
          <Leaf key={day} index={day}>
            <Link
              href={`/post?year=${props.year}&date=${day}${
                hackerMode ? '&mode=hacker' : ''
              }`}
              as={`/${props.year}/${day}${hackerMode ? '?mode=hacker' : ''}`}
              passHref
            >
              <Content
                isToday={isToday}
                isAvailable={isAvailable}
                aria-label={
                  isAvailable
                    ? `Article for the ${day}. day of Christmas`
                    : `Article for December ${day} is not yet available`
                }
                aria-disabled={!isAvailable}
              >
                <span>{day}.</span>
              </Content>
            </Link>
          </Leaf>
        );
      })}
    </Tree>
  );
};

export default withRouter(ArticleList);
