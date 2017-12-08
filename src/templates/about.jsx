import React from 'react';
import Link from 'gatsby-link';
import ContentGenerator from '../utils/ContentGenerator';
import update from 'immutability-helper';
import axios from 'axios';


export default class AboutPage extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      pageData: JSON.parse(this.props.data.pages.internal.content),
      content: JSON.parse(this.props.data.pages.childPagesContent.internal.content)
    }
    this.updateContent = (index, newContent) => this._updateContent(index, newContent)
    this.saveChanges = () => this._saveChanges();
  }

  _saveChanges() {
    const pageId = this.state.pageData.id;
    const url = `http://localhost:3000/pages/${pageId}`;
    const data = {
      page: {
        content: this.state.content
      },
      id: pageId
    }

    axios.put(url, data)
     .then((res) => {
      if (res.status === 200) {
        console.log('Page saved!') // Trigger redeploy
      } else {
        console.log('There was an error saving your page')
        console.log(res)
      }
     })
     .catch((err) => console.log(err)) // Handle errors
  }

  _updateContent(index, content) {
    const newContent = update(this.state.content, { [index]: { text: { $set: content }}})
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
        <button onClick={this.saveChanges}>Save changes</button>
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