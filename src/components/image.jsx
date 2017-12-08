import React from 'react'
import { withStyles } from 'material-ui/styles';
import ImageUploader from 'react-images-upload';


const styles = theme => ({
  img: {
    width: '100%'
  }
});

class Image extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = { editing: false, image: this.props.source, caption: this.props.caption }
    this.toggleEditing = () => this._toggleEditing()
    this.handleImageChange = (image) => this._handleImageChange(image)
    this.handleCaptionChange = (val) => this._handleCaptionChange(val)
    this.doneEditing = () => this._doneEditing();
  }

  _toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  _doneEditing() {
    this.toggleEditing();
    this.props.updateContent(this.props.index, { caption: this.state.caption, source: this.state.image })
  }

  _handleCaptionChange(event) {
    const caption = event.currentTarget.value;
    this.setState({ caption })
  }

  _handleImageChange(image) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log('image read!')
      this.setState({ image: reader.result })
    }
    reader.readAsDataURL(image[0]);
  }

  render() {
    const { caption, image, editing } = this.state;

    if (editing) {
      return (
        <div>
          <ImageUploader
            withIcon={true}
            withPreview={true}
            buttonText='Choose an image'
            imgExtension={['.jpg', '.gif', '.png']}
            onChange={this.handleImageChange}
          />
          <input value={caption} onChange={this.handleCaptionChange} />
          <p onClick={this.doneEditing}>done editing</p>
        </div>
      )
    }

    return (
      <div className={this.props.classes.img} onClick={this.toggleEditing}>
        <img src={image} alt={caption} />
        <small>{caption}</small>
      </div>
    )
  }
};

export default withStyles(styles)(Image);