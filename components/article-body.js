import styled from 'styled-components';
import * as colors from '../constants/colors';
import * as fonts from '../constants/fonts';

const ArticleBody = styled.article`
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre {
    color: rgba(0, 0, 0, 0.85);
    margin: 1em 0 0.5em;
    word-wrap: break-word;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.sansSerifFont};
    font-weight: 300;
  }
  h2 {
    font-size: 42px;
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: 34px;
  }
  p {
    font-size: 21px;
    line-height: 1.58;
  }
  p code {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: ${fonts.monospaceFont};
    font-size: 16px;
    padding: 3px 4px;
    margin: 0 2px;
  }
  p img {
    width: 100%;
  }
  pre {
    background: rgba(0, 0, 0, 0.05);
    padding: 1em;
    overflow-y: scroll;
  }
  pre code {
    background: transparent;
    line-height: 1.5;
  }
  a {
    color: ${colors.primary};
  }
  ul,
  ol {
    font-size: 21px;
    line-height: 1.58;
  }
`;

export default ArticleBody;
