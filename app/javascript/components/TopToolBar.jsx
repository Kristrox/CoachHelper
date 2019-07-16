import React, { Component } from "react";

export default class TopToolBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onChangeToFullScreen();
  }

  render() {
    return (
      <div className="TopToolBar">
        <button onClick={this.handleChange}>Go Fullscreen</button>
      </div>
    );
  }
}
