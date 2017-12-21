import React from 'react';
import Link from 'gatsby-link';
import update from 'immutability-helper';

import PageContentContainer from '../containers/PageContentContainer'
import DisplayTitle from '../components/DisplayTitle'
import ContentGenerator from '../utils/ContentGenerator';

import { savePage } from '../utils/API';
import { auth } from '../utils/init';
import { Jumbotron, Button } from 'reactstrap';

const styles = {
  jumbotron: {
    display: 'flex',
    background: 'url(https://www.savethechildren.org.uk/content/dam/global/images/countries/syria/rescue-at-sea-vos-sc127177-orig.jpg.thumbimage.1536.1536.jpg) no-repeat center center',
    backgroundSize: 'cover',
    height: '60vh',
    minHeight: '440px',
    alignItems: 'center'
  }
}


export default class HomePage extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      pageData: JSON.parse(this.props.data.pages.internal.content),
      content: JSON.parse(this.props.data.pages.childPagesContent.internal.content),
    }
    this.updateContent = (index, newContent) => this._updateContent(index, newContent)
    this.updateTitle = (newTitle) => this._updateTitle(newTitle)
    this.saveChanges = () => this._saveChanges();
    this.token = auth.getToken();
  }

  _saveChanges() {
    const pageId = this.state.pageData.id;

    const data = {
      page: {
        content: this.state.content,
        title: this.state.pageData.title
      },
      id: pageId
    }

    savePage(pageId, data, this.token);
  }

  _updateContent(index, content) {
    const newContent = update(this.state.content, { [index]: { $merge: content }})
    this.setState({ content: newContent })
  }

  _updateTitle(newTitle) {
    const newContent = update(this.state.pageData, { title: { $set: newTitle }})
    this.setState({ pageData: newContent })
  }

  render() {
    const { content } = this.state;
    return (
      <div className='home'>
        <Jumbotron style={styles.jumbotron}>
          <DisplayTitle text={this.state.pageData.title} updateTitle={this.updateTitle} />
        </Jumbotron>
        <PageContentContainer content={content} />
    </div>
    )
  }
};


export const query = graphql`
  query HomePageQuery($slug: String!) {
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