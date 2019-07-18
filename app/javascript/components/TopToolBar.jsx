import React, { Component } from 'react';
import { Stage, Layer, Path } from 'react-konva';
import Ball from './Ball';

export default class TopToolBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = () => {
    this.props.onChangeToFullScreen();
  }
  
  handleClick = () => {
    this.props.onCopyTshirt(this.data)
  }


  render() {
    return (
      <div className="TopToolBar">
        <button onClick={ this.handleChange }>Go Fullscreen</button>
      </div>
    );
  }
}
