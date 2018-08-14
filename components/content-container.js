import styled from 'styled-components';

const ContentContainer = styled.div`
  margin: 2em auto;
  max-width: ${props => (props.size === 'large' ? '1000px' : '700px')};
  padding: 0 12px;

  @media (min-width: 7000px) {
    padding: 0;
  }
`;

export default ContentContainer;
