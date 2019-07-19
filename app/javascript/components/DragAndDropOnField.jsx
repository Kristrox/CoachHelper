import React, { Component } from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import PlayerChoice from "./PlayerChoice";
import App from "./FieldImage";

export default class DragAndDropOnField extends Component {
  addPlayersToinitialList(playerNumber, team) {
    const ourPlayerX = 100;
    const ourPlayerY = 20;
    const enemyPlayerX = 500;
    const enemyPlayerY = 20;

    let playerList = [];
    for (
      let playerIterator = 1;
      playerIterator <= playerNumber;
      playerIterator++
    ) {
      if (team == "ourTeam") {
        playerList.push({ x: ourPlayerX, y: ourPlayerY, id: playerIterator });
      } else {
        playerList.push({
          x: enemyPlayerX,
          y: enemyPlayerY,
          id: playerIterator
        });
      }
    }
    return playerList;
  }

  renderEnemies = () => {
    const listPlayers = this.state.enemyPlayers.map(player => (
      <Group
        key={player.id}
        draggable
        x={player.x}
        y={player.y}
        onDragEnd={this.handleDragEnd}
      >
        <Text text="👚" fontSize={80} />
        <Text
          x={player.x - 467}
          y={player.y + 5}
          text={player.id}
          fontSize={30}
        />
      </Group>
    ));

    return listPlayers;
  };

  checkIfPlayerIsOnField(element) {
    return element === playerNumber;
  }

  renderPlayers = (allPlayers, playerNumber, playersOnField) => {
    let playerAlredyOnField = playersOnField.some(function(player) {
      return player.id === playerNumber;
    });

    let playerWaitingToBeAddOnField = allPlayers.find(function(player) {
      return player.id === playerNumber;
    });

    if (playerAlredyOnField != 1) {
      playersOnField.push(playerWaitingToBeAddOnField);
    }

    const listPlayers = playersOnField
      .filter(player => player.id != 0)
      .map(player => (
        <Group
          key={player.id}
          draggable
          x={player.x}
          y={player.y}
          onDragEnd={this.handleDragEnd}
        >
          <Text key={player.id + "a"} text="👕" fontSize={80} />
          <Text
            key={player.id + "b"}
            x={player.x - 60}
            y={player.y + 5}
            text={player.id}
            fontSize={30}
          />
        </Group>
      ));
    return listPlayers;
  };

  handleClick = playerNumber => {
    this.setState({
      playerNumber: playerNumber
    });
  };

  state = {
    players: this.addPlayersToinitialList(99, "ourTeam"),
    enemyPlayers: this.addPlayersToinitialList(18, "enemy"),
    enemiesOnField: [{ x: 300, y: 20, id: 0 }],
    playersOnField: [{ x: 100, y: 20, id: 0 }],
    playerNumber: 0,

    ballisDragging: false,
    movableBallX: 335,
    movableBallY: 20
  };

  render() {
    return (
      <div>
        <PlayerChoice onClickChange={this.handleClick} />
        <div />
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <App />
          <Layer>
            <Text text="👚" x={500} y={20} fontSize={80} />
            {this.renderEnemies()}

            <Text text="👕" x={100} y={20} fontSize={80} />
            {this.renderPlayers(
              this.state.players,
              parseInt(this.state.playerNumber),
              this.state.playersOnField
            )}

            <Text
              text="⚽"
              fontSize={20}
              x={this.state.movableBallX}
              y={this.state.movableBallY}
              draggable
              fill={this.state.ballisDragging ? "green" : "black"}
              onDragStart={() => {
                this.setState({
                  ballisDragging: true
                });
              }}
              onDragEnd={e => {
                this.setState({
                  ballisDragging: false,
                  ballX: e.target.x(),
                  ballY: e.target.y()
                });
              }}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}
