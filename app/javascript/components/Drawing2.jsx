import React, { Component } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

class Drawing2 extends Component {
  state = {
    lines: []
  };

  handleMouseDown = () => {
    this._drawing = true;
    // add line
    this.setState({
      lines: [...this.state.lines, []]
    });
  };

  handleMouseMove = e => {
    // no drawing - skipping
    if (!this._drawing) {
      return;
    }
    const stage = this.stageRef.getStage();
    const point = stage.getPointerPosition();
    const { lines } = this.state;

    let lastLine = lines[lines.length - 1];
    // add point
    lastLine = lastLine.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    this.setState({
      lines: lines.concat()
    });
  };

  handleMouseUp = () => {
    this._drawing = false;

    this.setState({
      lines: this.state.lines.pop()
    });
  };

  render() {
    return (
      <>
        {this.state.lines.map((line, i) => (
          <Line key={i} points={line} stroke="red" />
        ))}
      </>
    );
  }
}
