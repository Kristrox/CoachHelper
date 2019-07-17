import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Droppable extends Component {
  drop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    this.props.updateBallPosition(this.props.x, this.props.y);
    // if (data == null) {
    //   e.preventDefault();
    //   e.stopImmediatePropagation();
    // } else {
    //   e.target.appendChild(document.getElementById(data));
    // }
  };

  allowDrop = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.allowDrop}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
