import React from 'react';
import Link from 'gatsby-link';
import ContentGenerator from '../utils/ContentGenerator';
import update from 'immutability-helper';


export default class AboutPage extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      pageData: JSON.parse(this.props.data.pages.internal.content),
      content: JSON.parse(this.props.data.pages.childPagesContent.internal.content)
    }
    this.updateContent = (index, newContent) => this._updateContent(index, newContent)
  }

  _updateContent(index, content) {
    const newContent = update(this.state.content, { 0: { text: { $set: content }}})
    this.setState({ content: newContent })
  }

  render() {
    const { content } = this.state;
    const contentComponents = ContentGenerator(content, this.updateContent);
    console.log('content', content)
    return (
      <div>
        { contentComponents }
        <Link to="/">Home</Link>
      </div>
    )
  }
};


export const query = graphql`
  query AboutPageQuery($slug: String!) {
    pages(fields: { slug: { eq: $slug } }) {
      internal {
        content
      }
      childPagesContent {
        internal {
          content
        }
      }
    }
  }
`;