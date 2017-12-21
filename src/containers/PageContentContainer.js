import { connect } from 'react-redux'
import { updatePageContent } from '../redux/actions'
import PageContent from '../components/PageContent'

const mapStateToProps = (state) => {
  return {
    content: state.content
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