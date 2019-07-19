import React, { Component } from 'react';

export default class BottomToolBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <button onClick={ (e) => this.props.onHandleStopDrawing() } >Click Me!</button>;
  }
}