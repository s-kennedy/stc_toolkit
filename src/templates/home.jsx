import React from 'react';
import Link from 'gatsby-link';
import DisplayTitle from '../components/DisplayTitle'
import ContentGenerator from '../utils/ContentGenerator';
import update from 'immutability-helper';
import axios from 'axios';
// import bgImage from '../assets/img/home-header.jpg';

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
      content: JSON.parse(this.props.data.pages.childPagesContent.internal.content)
    }
    this.updateContent = (index, newContent) => this._updateContent(index, newContent)
    this.updateTitle = (newTitle) => this._updateTitle(newTitle)
    this.saveChanges = () => this._saveChanges();
  }

  _saveChanges() {
    const pageId = this.state.pageData.id;
    const pageTitle = this.state.pageData.title;
    console.log('this.state.pageData', this.state.pageData)
    const url = `http://localhost:3000/pages/${pageId}`;
    const data = {
      page: {
        content: this.state.content,
        title: pageTitle
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
    const newContent = update(this.state.content, { [index]: { $merge: content }})
    this.setState({ content: newContent })
  }

  _updateTitle(newTitle) {
    console.log('newTitle', newTitle)
    const newContent = update(this.state.pageData, { title: { $set: newTitle }})
    this.setState({ pageData: newContent })
  }

  render() {
    const { content } = this.state;
    const contentComponents = ContentGenerator(content, this.updateContent);
    console.log('content', content)
    return (
      <div className='home'>
        <Jumbotron style={styles.jumbotron}>
          <DisplayTitle text={this.state.pageData.title} updateTitle={this.updateTitle} />
        </Jumbotron>

        { contentComponents }

        <Button onClick={this.saveChanges}>Save changes</Button>
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