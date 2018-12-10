import React, { Component } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import image1 from '../images/1.jpg';

const styles = {
  container: {
    width: 500,
    height: 300,
  },
  image: {
    maxWidth: 300,
  }
};

class ImageCrop extends Component {

  state = {
    dataURL: null,
  };

  render() {
    return (
      <div>
        <h1>Cropper.js</h1>

        <h3>Origin</h3>
        <div style={styles.container}>
          <img id="cropper_image" src={image1} alt="이미지1"/>
        </div>

        <h3>Cropped</h3>
        <img src={this.state.dataURL} alt="크롭" style={styles.image}/>
      </div>
    );
  }

  onCropEnd = e => {
    this.setState({
      dataURL: this.cropper.getCroppedCanvas().toDataURL()
    });
  };

  componentDidMount() {
    const $cropperImage = document.getElementById('cropper_image');
    this.cropper = new Cropper($cropperImage, {
      viewMode: 2,
      aspectRatio: 1,
      autoCrop: true,
      crop: e => {
        if (!this.state.dataURL) {
          this.onCropEnd();
        }
      },
      cropend: this.onCropEnd
    })
  }
}

export default ImageCrop;
