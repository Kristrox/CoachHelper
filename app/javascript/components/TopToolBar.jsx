import React, { Component } from "react";

export default class TopToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: true,
      drawingArrow: false
    };
  }

  handleStopDrawing = () => {
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
