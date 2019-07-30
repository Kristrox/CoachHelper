import React, { Component } from "react";

class UrlImage extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired
  };

  state = {
    image: null
  };

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.loadImage();
    }
  }

  loadImage = () => {
    const image = new window.Image();
    image.src = this.props.imageUrl;
    image.onload = () => {
      this.setState({
        image
      });
    };
  };

  render() {
    const { imageUrl, ...props } = this.props;
    return <Image image={this.state.image} {...props} />;
  }
}
