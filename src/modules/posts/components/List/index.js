import React, { Component, PropTypes } from 'react';
import { findIndex } from 'lodash';
import moment from 'moment';
import { get } from 'helpers/data';
import Item from '../Item';

export class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
  };

  getPosts = () => get(this.props, 'posts.node.posts.edges', []).map(edge => edge.post);

  getPostsGroupedByDay = () => this.getPosts().reduce((acc, post) => {
    const day = post.updatedAt;
    const { getDay } = this;
    const dayPostsIndex = findIndex(acc, el => getDay(el.date) === getDay(day));

    if (dayPostsIndex !== -1) {
      acc[dayPostsIndex].posts.push(post);
    } else {
      acc.push({
        date: day,
        posts: [post],
      });
    }

    return acc;
  }, []);

  getDay = date => moment(new Date(date)).format('MM/DD/YYYY');

  getYear = date => moment(new Date(date)).year();

  isCurrentYear = date => (this.getYear(date) === this.getYear(new Date()));

  isLoading = () => get(this.props, 'posts.loading') || !this.getPosts().length;

  isEmpty = () => this.getPosts().length === 0;

  formatDate = date => (
    this.isCurrentYear(date)
      ? moment(new Date(date)).format('dddd MMMM D')
      : moment(new Date(date)).format('dddd MMMM D, YYYY')
  );

  renderLoadingState = () => <h1>Loading Posts...</h1>;

  renderEmptyState = () => <h1>No Posts found.</h1>;

  render() {
    if (this.isLoading()) return this.renderLoadingState();
    if (this.isEmpty()) return this.renderEmptyState();

    return (
      <div className="posts__list">
        {this.getPostsGroupedByDay().map(({ date, posts }) => (
          <section className="day" key={date}>
            <header className="header">
              {this.formatDate(date)}
            </header>
            <ul className="list">
              {posts.map(({ id, title }) => (
                <Item
                  id={id}
                  key={id}
                  pictures={[]}
                  starred={false}
                  title={title}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  }
}

import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import { getQuery } from 'modules/router/selectors';

const mapQueriesToProps = ({ state }) => ({
  posts: {
    query: gql`
      query CategoryFeed($categoryId: ID!) {
        node(id: $categoryId){
          ... on Category{
            posts {
             edges {
                post:node {
                  id
                  title
                  updatedAt
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      categoryId: getQuery(state).categoryId,
    },
  },
});

export default connect({
  mapQueriesToProps,
})(PostsList);
