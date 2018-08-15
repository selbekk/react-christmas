import styled from 'styled-components';
import Avatar from './avatar';
import { LinkText } from './typography';

const Container = styled.div`
  text-align: center;
`;

const AuthorInfo = props => {
  const { author, readingTime, slug } = props;
  if (!author) {
    return null;
  }
  return (
    <Container>
      <Avatar src={author.image} />
      <p>
        A {readingTime} written by{' '}
        <LinkText href={`/author/${slug}`}>
          <strong>{author.name}</strong>
        </LinkText>
      </p>
    </Container>
  );
};

export default AuthorInfo;
