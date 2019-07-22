import React, { Component } from "react";
import { Stage, Layer, Text, Group } from "react-konva";

export default class DragAndDropOnField extends Component {

  addPlayersToinitialList(playerNumber, team) {
    const ourPlayerX = 100;
    const ourPlayerY = 20;
    const enemyPlayerX = 180;
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
        <Text text="👚" fontSize={50} />
        <Text
          x={player.x - 168}
          y={player.y - 10}
          text={player.id}
          fontSize={20}
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
          <Text 
            key={player.id + "a"} 
            text="👕" 
            fontSize={50} />
          <Text
            key={player.id + "b"}
            x={player.x - 87}
            y={player.y - 14}
            text={player.id}
            fontSize={20}
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
    enemiesOnField: [{ x: 180, y: 20, id: 0 }],
    playersOnField: [{ x: 100, y: 20, id: 0 }],
    playerNumber: 0,

    ballisDragging: false,
    movableBallX: 50,
    movableBallY: 20
  };

  render() {
    return (
      <>
            <Text text="👚" x={180} y={20} fontSize={50} />
            {this.renderEnemies()}

            <Text text="👕" x={100} y={20} fontSize={50} />
            {this.renderPlayers(
              this.state.players,
              parseInt(this.props.playerNumber),
              this.state.playersOnField
            )}

            <Text
              text="⚽"
              fontSize={30}
              x={this.state.movableBallX}
              y={this.state.movableBallY}
              draggable
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
      </>
    );
  }
}
