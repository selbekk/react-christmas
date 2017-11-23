import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import * as breakpoints from './breakpoints'

const DateBadge = styled.div`
  align-items: center;
  background-color: #d00;
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 32px;
  height: 75px;
  justify-content: center;
  margin: 50px auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 75px;
`;

const Title = styled.h1`
  font-size: 3em;
  hyphens: auto;
  margin-top: 0;

  ${breakpoints.mediumUp} {
    text-align: center;
  }
`;

const LeadParagraph = styled.p`
  font-size: 1.5em;
  font-weight: 100;
  line-height: 1.6;
`;

const Markdown = styled.div`
  line-height: 1.6;
`;

class ArticlePage extends Component {
  constructor(props) {
    super();

    const postId = Number(props.match.params.date);

    this.state = {
      postId: postId,
      validPost: !Number.isNaN(postId) || postId < 1 || postId > 24,
    };
  }

  async componentDidMount() {
    if (!this.state.validPost) {
      return; // Will be redirected
    }
    try {
      const post = await import(`./posts/post-${this.state.postId}`);
      this.setState({ post: post.default });
    } catch (e) {
      this.setState({ validPost: false });
    }
  }

  render() {
    const {
      post,
      postId,
      validPost,
    } = this.state;
    if (!validPost) {
      return <Redirect to="/" />;
    }

    if (!post) {
      // TODO: Add a real spinner
      return (
        <p>Loading</p>
      );
    }

    return (
      <article>
        <DateBadge>{postId}</DateBadge>
        <Title>{post.title}</Title>
        <LeadParagraph>{post.lead}</LeadParagraph>
        <Markdown dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    );
  }
}

export default ArticlePage;
