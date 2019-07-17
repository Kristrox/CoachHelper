import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Droppable extends Component {
  drop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop. return false;
    }

    e.target.appendChild(document.getElementById(data));
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
