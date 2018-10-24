import Link from 'next/link';
import styled from 'styled-components';

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
const Leaf = styled.li`
  width: 100%;
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

const ArticleList = props => {
  const today = new Date();
  return (
    <Tree>
      {daysOfChristmas.map(day => {
        const releaseDate = new Date(props.year, 11, day);
        const isAvailable = today > releaseDate;
        const isToday =
          today.getFullYear() === props.year &&
          today.getMonth() === 11 &&
          today.getDate() === day - 1;
        return (
          <Leaf key={day}>
            <Link
              href={`/post?year=${props.year}&date=${day}`}
              as={`/${props.year}/${day}`}
              passHref
            >
              <Content isToday={isToday} isAvailable={isAvailable}>
                <span>{day}.</span>
              </Content>
            </Link>
          </Leaf>
        );
      })}
    </Tree>
  );
};

export default ArticleList;
