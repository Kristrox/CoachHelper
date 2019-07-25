import React, { Component } from "react";
import { Text, Group } from "react-konva";

export default class DragAndDropOnField extends Component {
  state = {
    enemiesOnField: [{ x: 180, y: 20, id: 0 }],
    playersOnField: [{ x: 100, y: 20, id: 0 }],
    playerNumber: 0,
    ballisDragging: false,
  };

  renderEnemies = () => {
    const listPlayers = this.props.enemyPlayers.map(player => (
      <Group
        key={player.id}
        draggable
        x={player.x}
        y={player.y}
        onDragStart={e => {
          this.props.onHandleUpdateEnemyPlayersPosition(this.props.enemyPlayers);
        }}
        onDragEnd={e => {
          const x = this.props.enemyPlayers[player.id - 1].x;
          const y = this.props.enemyPlayers[player.id - 1].y
          const oldPosition = { playerX: x, playerY: y, playerId: player.id }
          this.props.enemyPlayers[player.id - 1].x = e.target.x();
          this.props.enemyPlayers[player.id - 1].y = e.target.y();
          this.props.onHandleUpdateEnemyPlayersPosition(this.props.enemyPlayers);
          this.props.onHandleUpdateOldPlayersPosition(oldPosition);
        }}
      >
      <Text text="👚" fontSize={50} />
      <Text
        x={12}
        y={10}
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
          x={ player.x }
          y={ player.y }
          onDragEnd={ e => {
            // this.props.onHandleUpdatePlayersPosition(this.props.enemyPlayers);
          }}
        >
          <Text 
            key={player.id + "a"} 
            text="👕" 
            fontSize={ 50 } />
          <Text
            key={player.id + "b"}
            x={ 12 }
            y={ 10 }
            text={ player.id }
            fontSize={ 20 }
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

  render() {
    return (
      <>
        <Text
          text="👚"
          x={ 180 }
          y={ 20 }
          fontSize={ 50 }
        />
        
        { this.renderEnemies() }

        <Text 
          text="👕" 
          x={ 100 }
          y={ 20 }
          fontSize={ 50 }
        />
        
        { this.renderPlayers(
          this.props.players,
          parseInt(this.props.playerNumber),
          this.state.playersOnField
        )}

        <Text
          text="⚽"
          fontSize={ 30 }
          x={ this.props.ballPosition[0].ballX }
          y={ this.props.ballPosition[0].ballY }
          draggable
          onDragStart={() => {
            this.props.onhandleUpdateBallPosition(this.props.ballPosition);
          }}
          onDragEnd={e => {
            const newPosition = { ballX: e.target.x(), ballY: e.target.y() }
            const oldPosition = { ballX: this.props.ballPosition[0].ballX, ballY: this.props.ballPosition[0].ballY }
            this.props.onhandleUpdateBallPosition([newPosition, oldPosition]);
          }}
        />
      </>
    );
  }
}
