import React from 'react';

import PageContentContainer from '../containers/PageContentContainer'
import PageHeaderContainer from '../containers/PageHeaderContainer'

import { savePage } from '../utils/API';
import { auth } from '../utils/init';

import { connect } from 'react-redux'
import { updatePageContent, updatePageMetaData } from '../redux/actions'

class HomePage extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.saveChanges = () => this._saveChanges();
    this.token = auth.getToken();
    this.props.onUpdatePageContent(JSON.parse(this.props.data.pages.childPagesContent.internal.content));
    this.props.onUpdatePageMetaData(JSON.parse(this.props.data.pages.internal.content))
  }

  _saveChanges() {
    const pageId = this.props.pageData.id;

    const data = {
      page: {
        content: this.props.content,
        title: this.props.pageData.title
      },
      id: pageId
    }

    savePage(pageId, data, this.token);
  }

  render() {
    console.log('PAGE PROPS', this.props)
    return (
      <div className='home'>
        <PageHeaderContainer />
        <PageContentContainer />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    content: state.content,
    pageData: state.pageData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdatePageContent: (content) => {
      dispatch(updatePageContent(content))
    },
    onUpdatePageMetaData: (pageData) => {
      dispatch(updatePageMetaData(pageData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


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