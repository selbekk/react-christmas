import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import marked from 'marked';
import posts from './posts';
import * as breakpoints from './breakpoints'

const DateBadge = styled.div`
  align-items: center;
  background-color: #d00;
  border-radius: 50%;
  color: white;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 0 auto;
  width: 50px;
`;

const Title = styled.h1`
  font-size: 3em;
  hyphens: auto;
  margin-top: 0;
  word-break: break-all;

  ${breakpoints.mediumUp} {
    text-align: center;
  }
`;

const LeadParagraph = styled.p`
  font-size: 1.5em;
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
      validPost: !Number.isNaN(postId) || postId < 1 || postid > 24,
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
        <Markdown dangerouslySetInnerHTML={{ __html: marked(post.body) }} />
      </article>
    );
  }
}

export default ArticlePage;