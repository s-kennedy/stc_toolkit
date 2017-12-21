import { connect } from 'react-redux'
import { updatePageContent } from '../state/actions'
import PageContent from '../components/PageContent'

const mapStateToProps = (state, ownProps) => {
  return {
    content: ownProps.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePageContent: (content) => {
      dispatch(updatePageContent(content))
    }
  }
}

const PageContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContent)

export default PageContentContainer;