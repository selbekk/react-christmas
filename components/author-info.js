import { Fragment } from 'react';
import styled from 'styled-components';
import Avatar from './avatar';
import AvatarContainer from './avatar-container';
import { LinkText } from './typography';

const Container = styled.div`
  text-align: center;
`;

const AuthorText = styled.p`
  line-height: 1.5;
`;

const AuthorInfo = props => {
  const { authors, readingTime } = props;
  if (!authors || !authors.length) {
    return null;
  }
  return (
    <Container>
      <AvatarContainer>
        {authors.map(author => (
          <Avatar key={author.name} src={author.image} alt={author.name} />
        ))}
      </AvatarContainer>
      <AuthorText>
        A {readingTime} written by <br />
        {authors.map((author, index) => (
          <Fragment key={author.name}>
            <LinkText href={`/author/${author.slug}`}>
              <strong>{author.name}</strong>
            </LinkText>
            {index < authors.length - 1 && ' and '}
          </Fragment>
        ))}
      </AuthorText>
    </Container>
  );
};

export default AuthorInfo;
