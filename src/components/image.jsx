import React from 'react'
import ImageUploader from 'react-images-upload';
import { Button } from 'reactstrap';


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
      this.setState({ image: reader.result })
    }
    reader.readAsDataURL(image[0]);
  }

  render() {
    const { caption, image, editing } = this.state;

    if (editing) {
      return (
        <div className='edit-container'>
          <ImageUploader
            withIcon={true}
            withPreview={true}
            buttonText='Choose an image'
            imgExtension={['.jpg', '.gif', '.png']}
            onChange={this.handleImageChange}
          />
          <input value={caption} onChange={this.handleCaptionChange} />
          <div className="edit-action">
            <Button onClick={this.doneEditing}>Done</Button>
          </div>
        </div>
      )
    }

    return (
      <div className='img edit-container'>
        <img src={image} alt={caption} />
        <small>{caption}</small>
        <div className="edit-action">
          <Button onClick={this.toggleEditing}>Edit</Button>
        </div>
      </div>
    )
  }
};

export default Image;