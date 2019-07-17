import React, { Component } from 'react';
import { Image } from 'react-konva';

export default class Drawing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
    } 
  }

  componentDidMount() {
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const context = canvas.getContext("2d");
    this.setState({ canvas, context });
  }

  handleMouseDown = () => {
    this.setState({ isDrawing: true });
    const stage = this.image.parent.parent;
    this.lastPointerPosition = stage.getPointerPosition();
  };

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  };

  handleMouseMove = () => {
    const { context, isDrawing } = this.state;

    if (isDrawing) {
      context.strokeStyle = "#df4b26";
      context.lineJoin = "round";
      context.lineWidth = 5;
      context.globalCompositeOperation = "source-over";
      context.beginPath();

      let localPos = {
        x: this.lastPointerPosition.x - this.image.x(),
        y: this.lastPointerPosition.y - this.image.y()
      };
      
      context.moveTo(localPos.x, localPos.y);
      const stage = this.image.parent.parent;
      let pos = stage.getPointerPosition();
      
      localPos = {
        x: pos.x - this.image.x(),
        y: pos.y - this.image.y()
      };
      
      context.lineTo(localPos.x, localPos.y);
      context.closePath();
      context.stroke();
      this.lastPointerPosition = pos;
      this.image.getLayer().draw();
    }
  };

  render() {
    const { canvas } = this.state;

    return (
      <Image
        image={ canvas }
        ref={ node => (this.image = node) }
        width={ this.props.width }
        height={ this.props.height }
        stroke="blue"
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onMouseMove={ this.handleMouseMove }
        listening={ this.props.stopDrawing}
      />
    );
  }
}