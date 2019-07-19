import React, { Component } from "react";
import { Stage, Layer, Text, Group } from "react-konva";
import PlayerChoice from "./PlayerChoice";

export default class DragAndDropOnField extends Component {
  setPlayers(playerNumber, team) {
    var ourPlayerX = 100;
    var OurPlayerY = 20;
    var EnemyPlayerX = 500;
    var EnemyPlayerY = 20;

    var playerList = [];
    for (
      let playerIterator = 1;
      playerIterator <= playerNumber;
      playerIterator++
    ) {
      if (team == "ourTeam") {
        playerList.push({ x: ourPlayerX, y: OurPlayerY, id: playerIterator });
      } else {
        playerList.push({
          x: EnemyPlayerX,
          y: EnemyPlayerY,
          id: playerIterator
        });
      }
    }
    return playerList;
  }

  renderEnemies = players => {
    const listPlayers = players.map(player => (
      <Group
        key={player.id}
        draggable
        x={player.x}
        y={player.y}
        onDragEnd={this.handleDragEnd}
      >
        <Text key={player.id + "a"} text="👚" fontSize={80} />
        <Text
          key={player.id + "b"}
          x={player.x - 467}
          y={player.y + 5}
          text={player.id}
          fontSize={30}
        />
      </Group>
    ));

    return listPlayers;
  };

  renderPlayers = (allPlayers, playerNumber, playersOnField) => {
    for (var i = 0; i < playersOnField.length; i++) {
      if (playersOnField[i].id === playerNumber) {
        var playerAlredyOnField = 1;
      }
    }

    for (
      var playerIterator = 0;
      playerIterator < allPlayers.length;
      playerIterator++
    ) {
      if (allPlayers[playerIterator].id === playerNumber) {
        var playerWaitingToBeAddOnField = allPlayers[playerIterator];
      }
    }

    if (playerAlredyOnField != 1) {
      playersOnField.push(playerWaitingToBeAddOnField);
    }

    const listPlayers = playersOnField
      .filter(player => player.id != 0)
      .map(player => (
        <Group
          key="player.id"
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

  HandleClick = playerNumber => {
    this.setState(
      {
        playerNumber: playerNumber
      },
      () => console.log(this.state.playerNumber)
    );
  };

  state = {
    players: this.setPlayers(99, "ourTeam"),
    enemyPlayers: this.setPlayers(18, "enemy"),
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
        <PlayerChoice onClickChange={this.HandleClick} />
        <div />
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="👚" x={500} y={20} fontSize={80} />
            {this.renderEnemies(this.state.enemyPlayers)}

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
