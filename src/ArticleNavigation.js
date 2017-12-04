import React from 'react';
import { bool, number } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
`;

const ArticleLink = styled(Link)`
    color: #d00;
    text-decoration: none;

    &:focus,
    &:hover {
        text-decoration: underline;
    }
`;

const ArticleNavigation = props => (
    <Container>
        <ArticleLink
            to={`/${props.previousId}`}
            style={{ visibility: props.previousId > 0 ? 'visible' : 'hidden' }}
        >
            &larr; Previous post
        </ArticleLink>
        <ArticleLink
            to={`/${props.nextId}`}
            style={{ visibility: props.nextId < 25 && props.hasNextPost ? 'visible' : 'hidden' }}
        >
            Next post &rarr;
        </ArticleLink>
    </Container>
);

ArticleNavigation.propTypes = {
    previousId: number,
    nextId: number,
    hasNextPost: bool,
};

export default ArticleNavigation;
