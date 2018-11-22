import styled from 'styled-components';
import * as breakpoints from '../constants/breakpoints';

const ContentContainer = styled.div`
  margin: 2em auto;
  max-width: ${props => (props.size === 'large' ? '1000px' : '700px')};
  padding: 0 12px;

  ${breakpoints.mediumUp} {
    padding: 0;
  }
`;

export default ContentContainer;
