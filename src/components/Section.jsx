import React from 'react'
import ContentGenerator from '../utils/ContentGenerator';
import update from 'immutability-helper';


const styles = {
  container: {
    padding: '3rem',
  }
}

class Section extends React.Component {
    constructor(props) {
    super(props);
    this.state = { content: this.props.children }
    this.updateParentContent = (index, content) => this._updateParentContent(index, content)
  }

  _updateParentContent(index, content) {
    console.log('index', index);
    console.log('content', content);
    console.log('this.state.content', this.state.content)
    const newContent = update(this.state.content, { [index]: { $merge: content }})
    this.setState({ content: newContent }, () => {
      this.props.updateContent(this.props.index, this.state.content)
    })
  }

  render() {
    const { content } = this.state;
    const contentComponents = ContentGenerator(content, this.updateParentContent);

    return (
      <section className={this.props.classes}>
        <div style={styles.container} className='container col-xs-12 col-sm-8'>
          { contentComponents }
        </div>
      </section>
    );
  }

};


export default Section