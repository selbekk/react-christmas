import Link from 'next/link';
import styled from 'styled-components';

import * as colors from '../constants/colors';

const Tree = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Leaf = styled.li`
  background-color: ${colors.primary};
  color: ${colors.white};

  width: 100%;
`;
const Content = styled.a`
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 48px;
  height: 100%;
  width: 100%;
`;

const daysOfChristmas = new Array(24).fill().map((_, i) => `${i + 1}`);

const ArticleList = props => {
  return (
    <Tree>
      {daysOfChristmas.map(day => (
        <Leaf key={day}>
          <Link
            href={`/post?year=${props.year}&date=${day}`}
            as={`/${props.year}/${day}`}
            passHref
          >
            <Content>{day}.</Content>
          </Link>
        </Leaf>
      ))}
    </Tree>
  );
};

export default ArticleList;
