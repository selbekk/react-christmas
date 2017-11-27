import React from 'react';
import { node } from 'prop-types';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: 0;
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: min-height: 600px;
    max-height: 100vh;
`;

const Emoji = styled.div`
    animation: 1s linear infinite ${spin};
    font-size: 3em;
`;

const Label = styled.p`
    text-align: center;
`;

const Spinner = ({ children }) => (
    <Container>
        <div>
            <Emoji>
                <span role="img" aria-label="Loading">❄️</span>
            </Emoji>
            <Label>{children}</Label>
        </div>
    </Container>
);

Spinner.defaultProps = {
    children: 'Loading...',
};

Spinner.propTypes = {
    children: node,
};

export default Spinner;
