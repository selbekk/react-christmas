import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #f3f3f3;
    border-top: 3px solid #d00;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 24px 12px;
    margin-top: 24px;
`;

const Link = styled.a`
    color: #d00;
    text-decoration: none;

    &:focus,
    &:hover {
        text-decoration: underline;
    }
`;

const SpectrumCallout = (props) => (
    <Container>
        Love it? Hate it? Have some questions? Head over to
        our <Link href="https://spectrum.chat/react-christmas">Spectrum community</Link> and air your thoughts!
    </Container>
);

export default SpectrumCallout;
