import React from 'react';
import styled from 'styled-components';
import * as breakpoints from './breakpoints';

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 3em;
    margin-top: 0;
    text-align: center;
`;

const LeadParagraph = styled.p`
    font-size: 1.5em;
    font-weight: 100;
    line-height: 1.6;
    text-align: center;
`;

export default () => (
    <Container>
        <Title>We launch on December 1st</Title>
        <LeadParagraph>
            This React Christmas calendar launches December 1st. That's closing in! Check back soon :)
        </LeadParagraph>
    </Container>
);
