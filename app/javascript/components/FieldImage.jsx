import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import "./playgroundfield_background.png";
import useImage from "use-image";

class URLImage extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }
  loadImage() {
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }
  handleLoad = () => {
    this.setState({
      image: this.image
    });
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={node => {
          this.imageNode = node;
        }}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Layer>
        <URLImage
          src="https://wallpaper21.com/wp-content/uploads/2017/08/Playfield-iPhone-HD-x-1080p-HD-wallpaper-wpt7407949.jpg"
          x={20}
          y={110}
        />
      </Layer>
    );
  }
}
