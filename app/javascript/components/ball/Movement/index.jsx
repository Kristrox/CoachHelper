import React, { Component } from "react";
import styled from "styled-components";
import Droppable from "../Droppable";
import Draggable from "../Draggable";
import Card from "../Card";
import img from "../img/playgroundfield_background.png";
import DropdownButton from "react-bootstrap/DropdownButton";
//import { Col, Row } from 'react-grid-system';

var keyo = 0;

const Wrapper0 = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;

const Wrapper1 = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: center;
`;
const Wrapper2 = styled.div`
  background-image: url(${img});
  background-size: 100% 600px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;
const Wrapper3 = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const droppableStyle2 = {
  border: "solid",
  width: "50px",
  height: "50px"
};

const droppableStyle1 = {
  width: "50px",
  height: "50px"
};

export default class Movement extends Component {
  renderFirstRow() {
    const firtsRow = [];
    for (let i = 0; i < 16; i++) {
      if (i == 0) {
        firtsRow.push(
          <Droppable key={i + "z"} style={droppableStyle2}>
            <Draggable key={i + "a"} id="item1">
              <h2>⚽</h2>
            </Draggable>
          </Droppable>
        );
      } else {
        firtsRow.push(<Droppable key={i + "f"} style={droppableStyle2} />);
      }
    }
    return firtsRow;
  }

  renderColumn() {
    const column = [];
    for (let i = 0; i < 12; i++) {
      column.push(
        <Wrapper1 key={`Wrapper1_${i}`}>{this.renderRow()}</Wrapper1>
      );
      keyo = keyo + 1;
    }
    return column;
  }

  renderRow() {
    const grid = [];
    for (let i = 0; i < 16; i++) {
      grid.push(<Droppable key={i + "cos" + keyo} style={droppableStyle1} />);
    }
    return grid;
  }

  button() {
    const but = [];
    but.push(
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </DropdownButton>
    );
    return but;
  }

  render() {
    return (
      <Wrapper0>
        <Wrapper3>{this.renderFirstRow()}</Wrapper3>
        <Wrapper2>{this.renderColumn()}</Wrapper2>
      </Wrapper0>
    );
  }
}
