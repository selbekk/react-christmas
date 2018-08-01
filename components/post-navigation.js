import styled from 'styled-components';
import { LinkText } from './typography';
import ContentContainer from './content-container';

const FlexContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
`;

const PostNavigation = props => {
  const { date, year } = props;
  const hasPreviousPost = date > 1;
  const hasNextPost = date < 24 && new Date() > new Date(year, 11, date);
  return (
    <FlexContainer>
      {hasPreviousPost && (
        <LinkText
          href={`/post?year=${year}&date=${date - 1}`}
          as={`/${year}/${date - 1}`}
          prefetch
        >
          &larr;Previous post
        </LinkText>
      )}
      {!hasPreviousPost && <span />}
      {hasNextPost && (
        <LinkText
          href={`/post?year=${year}&date=${date + 1}`}
          as={`/${year}/${date + 1}`}
          prefetch
        >
          Next post &rarr;
        </LinkText>
      )}
    </FlexContainer>
  );
};

export default PostNavigation;
