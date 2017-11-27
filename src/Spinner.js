import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: min-height: 600px;
    max-height: 100vh;
`;

const Emoji = styled.div`
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
