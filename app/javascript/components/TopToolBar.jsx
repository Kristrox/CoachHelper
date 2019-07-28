import React, { Component } from "react";
import InputName from "../components/InputName";

export default class TopToolBar extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = e => {
    this.props.onHandleSave();
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
          onClick={() => this.props.onHandleStartDrowingArrows(false)}
        >
          Arrows
        </button>
        <button
          className="TopToolBar btn btn-success"
          onClick={() =>  this.props.onHandleStartDrowingArrows(true)}
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
