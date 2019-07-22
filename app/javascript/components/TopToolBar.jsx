import React, { Component } from "react";

export default class TopToolBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawing: true,
      drawingArrow: false
    }
    this.handleStopDrawing = this.handleStopDrawing.bind(this);
  }
  
  handleStopDrawing = (e) => {
    this.props.onHandleStopDrawing();
      this.setState({
        drawing: this.state.drawing ? false : true
      });
  }

  handleDrawArrow = (e) => {
    this.props.onHandleStartDrowingArrows();
      this.setState({
        drawingArrow: this.state.drawingArrow ? false : true
      });
  }
  
  render() {
    return (
      <div className="TopToolBar d-flex justify-content-end">
        <button className="TopToolBar btn btn-success" onClick={ this.handleStopDrawing }>{ this.state.drawing ? "Stop drawing" : "Start drawing" }</button>
        <button className="TopToolBar btn btn-success" onClick={ () => this.props.onChangeToFullScreen() }>Go Fullscreen</button>
        <button className="TopToolBar btn btn-success" onClick={ this.handleDrawArrow }>Arrows</button>
      </div>
    );
  }
}
