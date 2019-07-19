import React, { Component } from "react";
import styled from "styled-components";
import Droppable from "../Droppable";
import Draggable from "../Draggable";

import img from "../img/playgroundfield_background.png";
import DropdownButton from "react-bootstrap/DropdownButton";
//import { Col, Row } from 'react-grid-system';

const droppableStyle2 = {
  border: "solid",
  width: "50px",
  height: "50px"
};

const droppableStyle1 = {
  border: "solid",
  width: "50px",
  height: "50px"
};

export default class Movement extends Component {
  state = {
    ball: IN_TOOLBAR,
    player: IN_TOOLBAR,
    players: [{ position: { x: 0, y: 1 }, number: 2 }]
  };

  updateBallPosition = (x, y) => {
    this.setState({ ball: { x: x, y: y } });
  };
  /*
  updatePlayerPosition = (x, y) => {
    this.setState({ player: { x: x, y: y } });
  };
*/
  renderToolbar = () => {
    const toolbar = [];

    for (let i = 0; i < 23; i++) {
      if (i == 0) {
        if (this.state.ball === IN_TOOLBAR) {
          toolbar.push(
            <div key={i} style={droppableStyle2}>
              <Draggable>
                <h2>⚽</h2>
              </Draggable>
            </div>
          );
        } else {
          toolbar.push(<div key={i} style={droppableStyle2} />);
        }
        /* } else if (i == 1) {
        console.log(this.state.players[0]);
        if (this.state.player === IN_TOOLBAR) {
          toolbar.push(
            <div key={i} style={droppableStyle2}>
              <Draggable>
                <h2>😃</h2>
              </Draggable>
            </div>
          );
        } else {
          toolbar.push(<div key={i} style={droppableStyle2} />);
        }*/
      } else {
        toolbar.push(<div key={i} style={droppableStyle2} />);
      }
    }
    return toolbar;
  };

  renderRows = () => {
    const rows = [];
    for (let y = 0; y < 12; y++) {
      rows.push(<Row key={`Wrapper1_${y}`}>{this.renderColumns(y)}</Row>);
    }
    return rows;
  };

  renderColumns = y => {
    const grid = [];
    for (let x = 0; x < 25; x++) {
      grid.push(
        <Droppable
          x={x}
          y={y}
          style={droppableStyle1}
          updateBallPosition={this.updateBallPosition}
          updatePlayerPosition={this.updatePlayerPosition}
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
    //console.log(x, y);
    const player = this.state.players.find(
      player => player.position.x === x && player.position.y === y
    );

    if (!player) {
      return null;
    }

    return (
      <Draggable>
        <div>😃{player.number}</div>
      </Draggable>
    );
  };

  render() {
    return (
      <Wrapper>
        <Toolbar>{this.renderToolbar()}</Toolbar>
        <Field>{this.renderRows()}</Field>
      </Wrapper>
    );
  }
}

const IN_TOOLBAR = "true";

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
