import styled, { keyframes } from 'styled-components';

const swing = keyframes`
0% { transform: none }
25% { transform: rotateZ(-45deg) }
75% { transform: rotateZ(45deg) }
100% { transform: none }
`;

const Container = styled.div`
  text-align: center;
`;
const Avatar = styled.div`
  background: #eee url(${props => props.src}) center center no-repeat;
  background-size: cover;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  &:focus,
  &:hover {
    animation: 3.5s ease-in-out forwards infinite ${swing};
  }
`;

const AuthorInfo = props => {
  const { author } = props;
  if (!author) {
    return null;
  }
  return (
    <Container>
      <Avatar src={author.image} />
      <p>
        Written by <strong>{props.author.name}</strong>
      </p>
    </Container>
  );
};

export default AuthorInfo;
