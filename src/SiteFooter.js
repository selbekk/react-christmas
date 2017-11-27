import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';
import * as breakpoints from './breakpoints';

const OuterContainer = styled.footer`
    border-top: 4px solid #d00;
`;

const TopSection = styled.section`
    background: #f3f3f3;
    padding: 24px 0;
`;

const BottomSection = styled.section`
    background: #3f3f3f;
    color: #f3f3f3;
    text-align: center;
`;

const Link = styled.a`
    color: inherit;
`;

const Heading = styled.h3`
    color: #000;
    margin-top: 0;
`;

const Paragraph = styled.p`
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 0;
`;

const Columns = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Column = styled.div`
    flex-basis: 100%;

    ${breakpoints.mediumUp} {
        flex-basis: calc(50% - 12px);
    }
`;

const SiteFooter = () => (
    <OuterContainer>
        <TopSection>
            <PageContainer>
                <Columns>
                    <Column>
                        <Heading>What is this?</Heading>
                        <Paragraph>
                            Just for future reference, when you're drinking wine from a box and have a bit too much time on your
                            hands: don't buy domain names. I did that, and it kind of ballooned into this huge Christmas
                            calendar adventure. Oh well.
                        </Paragraph>
                    </Column>
                    <Column>
                        <Heading>Who am I?</Heading>
                        <Paragraph>
                            I'm Kristofer, a simple React fan from Oslo, Norway. I work
                            for <Link href="https://www.bekk.no">BEKK Consulting</Link>, and I spend my spare time taking
                            photos of my adorbs dog <Link href="https://www.instagram.com/burgerbulldog">Burger</Link>.
                        </Paragraph>
                    </Column>
                </Columns>
            </PageContainer>
        </TopSection>
        <BottomSection>
            <PageContainer>
                Made with <span
                    aria-label="christmas spirit"
                    role="img"
                >🎅</span> by <Link href="https://www.twitter.com/selbekk">@selbekk</Link>
            </PageContainer>
        </BottomSection>
    </OuterContainer>
);

export default SiteFooter;
