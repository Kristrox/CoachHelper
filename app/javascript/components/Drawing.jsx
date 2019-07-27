import React, { Component } from "react";
import { Image as ImageKonva } from "react-konva";

export default class Drawing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
      cPushArray: []
    };
  }

  handleMouseDown = ({ evt }) => {
    // const canv = this.state.canvas.toDataURL();
    // let item = this.state.cPushArray;
    // item.push(canv)
    // this.setState({
    //   cPushArray: item
    // })
    // let canv = this.props.canvas.cloneNode(true)
    // let con = this.props.context.cloneNode(true);
    // console.log(con)
    ingData
    const canv = this.props.canvas.toDataURL();
    this.props.onHandleUpdateOldCanvas(canv);
    this.setState({ isDrawing: true });
    const stage = this.image.parent.parent;
    this.lastPointerPosition = stage.getPointerPosition();

    if (this.props.startDrawingArrows === true) {
      const { offsetX, offsetY } = evt;
      let localPos = {
        x: offsetX,
        y: offsetY
      };
      this.props.onHandleDrawingArrows(localPos);
      this.setState({ isDrawing: false });
    }
  };

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  };

  handleMouseMove = () => {
    const { isDrawing } = this.state;
    const { context } = this.props;

    if (isDrawing) {
      context.strokeStyle = "red";
      context.lineJoin = "round";
      context.lineWidth = 7;
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
    // const canvasPic = new Image();
    // const canv = this.state.canvas.toDataURL();
    // canvasPic.src = canv;
    const { canvas } = this.props;
    // console.log(canvas)
    // console.log(this.state.context.drawImage(canvasPic, 0, 0))
    // canvas = this.state.context.drawImage(canvasPic, 0, 0);

    return (
      <ImageKonva
        image={canvas}
        ref={node => (this.image = node)}
        width={this.props.width}
        height={this.props.height}
        stroke="blue"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        listening={this.props.stopDrawing}
      />
    );
  }
}
