import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import * as breakpoints from './breakpoints';

const Container = styled.div``;

const ListTitle = styled.h2`
    border-top: 1px solid #ccc;
    padding-top: 24px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    padding: 0;

    ${breakpoints.mediumUp} {
        flex-direction: row;
    }
`;

const ListItem = styled.li`
    margin-bottom: 24px;
    display: block;

    ${breakpoints.mediumUp} {
        flex: 1;
        margin-bottom: 0;
        max-width: calc(33% - 12px);
    }
`;

const CardLink = styled.a`
    border-top: 3px solid #d00;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: block;
    overflow: hidden;
    text-decoration: none;
    height: 100%;
    transition: all .1s ease-out;
    will-change: box-shadow transform;

    &:focus, &:hover {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        outline: none;
        transform: translate(-1px, -1px);
    }
`;

const CardTitle = styled.h3`
    background-color: #f3f3f3;
    color: #111;
    margin: 0;
    padding: 12px;
`;

const CardDescription = styled.p`
    color: #333;
    line-height: 1.5;
    margin-top: 0;
    padding: 12px;
    margin: 0;
`;

const Resources = (props) => {
    const {
        resources,
    } = props;

    if (!resources) {
        return null;
    }

    return (
        <Container>
            <ListTitle>Here's some great articles!</ListTitle>
            <List>
                {resources.map((resource, idx) => (
                    <ListItem key={idx}>
                        <CardLink href={resource.link}>
                            <CardTitle>{resource.title}</CardTitle>
                            <CardDescription>{resource.body}</CardDescription>
                        </CardLink>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

Resources.propTypes = {
    resources: arrayOf(shape({
        title: string.isRequired,
        link: string.isRequired,
        body: string.isRequired,
    })).isRequired,
};

export default Resources;
