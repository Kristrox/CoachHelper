import React, { Component } from "react";
import styled from "styled-components";
import Droppable from "../Droppable";
import Draggable from "../Draggable";
import Card from "../Card";
import img from "../img/playgroundfield_background.png";
import DropdownButton from "react-bootstrap/DropdownButton";
//import { Col, Row } from 'react-grid-system';

var keyo = 0;

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
  state = {
    ball: IN_TOOLBAR,
    players: [{ position: { x: 0, y: 0 }, number: 2 }]
  };

  updateBallPosition = (x, y) => {
    this.setState({ ball: { x: x, y: y } });
  };

  renderToolbar = () => {
    const firtsRow = [];
    for (let i = 0; i < 16; i++) {
      if (i == 0) {
        if (this.state.ball === IN_TOOLBAR) {
          firtsRow.push(
            <div key={i} style={droppableStyle2}>
              <Draggable id="item1">
                <h2>⚽</h2>
              </Draggable>
            </div>
          );
        } else {
          firtsRow.push(<div key={i} style={droppableStyle2} />);
        }
      } else {
        firtsRow.push(<div key={i} style={droppableStyle2} />);
      }
    }
    return firtsRow;
  };

  renderColumn = () => {
    const column = [];
    for (let y = 0; y < 12; y++) {
      column.push(<Row key={`Wrapper1_${y}`}>{this.renderRow(y)}</Row>);
      keyo = keyo + 1;
    }
    return column;
  };

  renderRow = y => {
    const grid = [];
    for (let x = 0; x < 16; x++) {
      grid.push(
        <Droppable
          x={x}
          y={y}
          key={x + "cos" + keyo}
          style={droppableStyle1}
          updateBallPosition={this.updateBallPosition}
        >
          {this.state.ball !== IN_TOOLBAR &&
          this.state.ball.x === x &&
          this.state.ball.y === y ? (
            <Draggable id="item1">
              <h2>⚽</h2>
            </Draggable>
          ) : null}

          {this.renderPlayer(x, y)}
        </Droppable>
      );
    }
    return grid;
  };

  renderPlayer = (x, y) => {
    console.log(x, y);
    const player = this.state.players.find(
      player => player.position.x === x && player.position.y === y
    );

    if (!player) {
      return null;
    }

    return <div>{player.number}</div>;
  };

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
      <Wrapper>
        <Toolbar>{this.renderToolbar()}</Toolbar>
        <Field>{this.renderColumn()}</Field>
      </Wrapper>
    );
  }
}

const IN_TOOLBAR = "IN_TOOLBAR";

const Wrapper = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;

const Row = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: center;
`;
const Field = styled.div`
  background-image: url(${img});
  background-size: 100% 600px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;
const Toolbar = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;
