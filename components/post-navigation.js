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
  const now = new Date();
  const hasNextPost =
    date < 24 && now > new Date(Date.UTC(year, 11, date + 1, 0, 0, 0));
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
