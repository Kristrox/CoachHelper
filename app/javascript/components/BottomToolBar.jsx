import React, { Component } from "react";

export default class BottomToolBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onHandleStopDrawing();
  }
  
  render() {
    return <button onClick={ this.handleChange }>Click Me!!</button>;
  }
}

