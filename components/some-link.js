import { LinkText } from './typography';

const SomeLink = props => (
  <LinkText href={props.href}>{props.children}</LinkText>
);

export default SomeLink;
