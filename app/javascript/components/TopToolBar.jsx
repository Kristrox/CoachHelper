import React, { Component } from "react";
import InputName from "../components/InputName";

export default class TopToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: true,
      drawingArrow: false
    };
    this.handleStopDrawing = this.handleStopDrawing.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = e => {
    this.props.onHandleSave();
  };

  handleStopDrawing = e => {
    this.props.onHandleStopDrawing();
    this.setState({
      drawing: this.state.drawing ? false : true
    });
  };

  handleDrawArrow = () => {
    this.props.onHandleStartDrowingArrows(false);
    this.setState({
      drawingArrow: this.state.drawingArrow ? false : true
    });
  };

  handleDrawDashArrow = () => {
    this.props.onHandleStartDrowingArrows(true);
    this.setState({
      drawingArrow: this.state.drawingArrow ? false : true
    });
  };

  render() {
    return (
      <div className="TopToolBar d-flex justify-content-end">
        <InputName />
        <button
          className="TopToolBar btn btn-success"
          onClick={this.handleSave}
        >
          Save To Play Book
        </button>
        <button
          className="TopToolBar btn btn-success"
          onClick={this.handleStopDrawing}
        >
          {this.state.drawing ? "Stop drawing" : "Start drawing"}
        </button>
        <button
          className="TopToolBar btn btn-success"
          onClick={this.handleDrawArrow}
        >
          Arrows
        </button>
        <button
          className="TopToolBar btn btn-success"
          onClick={this.handleDrawDashArrow}
        >
          Dashed Arrows
        </button>
        <button
          className="TopToolBar btn btn-success"
          onClick={() => this.props.onHandleUndo()}
        >
          Undo
        </button>
        <button
          className="TopToolBar btn btn-success"
          onClick={() => this.props.onChangeToFullScreen()}
        >
          Go Fullscreen
        </button>
      </div>
    );
  }
}
