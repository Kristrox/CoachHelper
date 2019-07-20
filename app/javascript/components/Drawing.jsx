import React, { Component } from 'react';
import { Image } from 'react-konva';

export default class Drawing extends Component {
  constructor(props) {
    super(props);
    const canvas = document.createElement("canvas");
    const canvasWidth = 800;
    const canvasHeight = 600;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    this.state = {
      isDrawing: false,
      canvas: canvas,
      context: canvas.getContext("2d")
    };
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
      context.lineWidth = 2;
      context.globalCompositeOperation = "source-over";
      context.beginPath();

      const canvasWidth = 800;
      const canvasHeight = 600;
      const ratioX = this.props.width / canvasWidth;
      const ratioY = this.props.height / canvasHeight;

      let localPos = {
        x: this.lastPointerPosition.x / ratioX,
        y: this.lastPointerPosition.y / ratioY
      };

      context.moveTo(localPos.x, localPos.y);
      const stage = this.image.parent.parent;
      let pos = stage.getPointerPosition();
      
      localPos = {
        x: pos.x / ratioX,
        y: pos.y / ratioY
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
        listening={ this.props.stopDrawing }
      />
    );
  }
}