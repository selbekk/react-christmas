import styled from 'styled-components';
import Avatar from './avatar';
import { LinkText } from './typography';

const Container = styled.div`
  text-align: center;
`;

const AuthorInfo = props => {
  const { author, slug } = props;
  if (!author) {
    return null;
  }
  return (
    <Container>
      <Avatar src={author.image} />
      <p>
        Written by{' '}
        <LinkText href={`/author/${slug}`}>
          <strong>{author.name}</strong>
        </LinkText>
      </p>
    </Container>
  );
};

export default AuthorInfo;
