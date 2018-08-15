import styled from 'styled-components';
import { LinkText } from './typography';

const IconContainer = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 20px;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const SomeLink = props => (
  <>
    <LinkText href={props.href}>{props.children}</LinkText>
  </>
);

export default SomeLink;
