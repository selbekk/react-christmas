import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from './Spinner';
import Resources from './Resources';
import * as breakpoints from './breakpoints';

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

  pre {
    background-color: #333;
    color: #fff;
    overflow-x: scroll;
    padding: 12px;
  }
`;

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    const postId = this.getPostId();

    this.state = {
      postId,
      validPost: this.isValidPost(),
    };
  }

  async componentDidMount() {
    if (!this.isValidPost()) {
      return; // Will be redirected
    }
    try {
      const post = await import(`./posts/post-${this.state.postId}`);
      this.setState({ post: post.default });
    } catch (e) {
      this.setState({ validPost: false });
    }
  }

  getPostId() {
    return Number(this.props.match.params.date);
  }

  isValidPost() {
    const postId = Number(this.props.match.params.date);
    const now = new Date();
    return !Number.isNaN(postId)
      && postId > 0
      && postId < 25
      && (
        (now.getYear() === 2017 && now.getMonth() === 11)
        || now.getYear() > 2017
        || process.env.NODE_ENV !== 'production' // for testing
      );
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
      return (
        <Spinner>Loading</Spinner>
      );
    }

    return (
      <article>
        <DateBadge>{postId}</DateBadge>
        <Title>{post.title}</Title>
        <LeadParagraph>{post.lead}</LeadParagraph>
        <Markdown dangerouslySetInnerHTML={{ __html: post.body }} />
        <Resources resources={post.resources} />
      </article>
    );
  }
}

export default ArticlePage;
