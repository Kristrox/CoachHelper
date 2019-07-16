import React, { Component } from "react";
import Immutable from 'immutable';

export default class DrawerField extends Component {
  constructor() {
    super();

    this.state = {
      lines: new Immutable.List(),
      isDrawing: false };


    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseDown(mouseEvent) {
    if (mouseEvent.button != 0) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true }));

  }

  handleMouseMove(mouseEvent) {
    if (!this.state.isDrawing) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent);

    this.setState(prevState => ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point)) }));

  }

  handleMouseUp() {
    this.setState({ isDrawing: false });
  }

  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top });

  }

  render() {
    return (
      React.createElement("div", {
        className: "drawArea",
        ref: "drawArea",
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove },

      React.createElement(Drawing, { lines: this.state.lines })));


  }}


function Drawing({ lines }) {
  return (
    React.createElement("svg", { className: "drawing" },
    lines.map((line, index) =>
    React.createElement(DrawingLine, { key: index, line: line }))));
}

function DrawingLine({ line }) {
  const pathData = "M " +
  line.
  map(p => {
    return `${p.get('x')} ${p.get('y')}`;
  }).
  join(" L ");

  return React.createElement("path", { className: "path", d: pathData });
}
