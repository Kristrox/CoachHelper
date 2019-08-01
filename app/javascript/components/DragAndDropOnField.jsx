import React, { Component } from "react";
import { Text, Group, Image } from "react-konva";
import enemyTShirtImage from "./images/tshirt.png"
import ourTeamTShirtImage from "./images/tshirto.png"
import useImage from "use-image";

const EnemyTshirt = (props) => {
  const [image] = useImage(enemyTShirtImage)
  return <Image image={image} width={60} height={50} x={props.x} y={props.y}/>
}

const TeamTshirt = (props) => {
  const [image] = useImage(ourTeamTShirtImage)
  return <Image image={image} width={60} height={50} x={props.x} y={props.y}/>
}

export default class DragAndDropOnField extends Component {
  state = {
    enemiesOnField: [{ x: 180, y: 20, id: 0 }],
    playersOnField: [{ x: 100, y: 20, id: 0 }],
    playerNumber: 0,
  };

  renderEnemies = () => {
    const listPlayers = this.props.enemyPlayers.map(player => (
      <Group
        key={player.id}
        draggable
        x={player.x}
        y={player.y}
        onDragStart={() => {
          this.props.onHandleUpdateEnemyPlayersPosition(this.props.enemyPlayers);
          this.props.onHandleDraging(true);
        }}
        onDragEnd={e => {
          const x = this.props.enemyPlayers[player.id - 1].x;
          const y = this.props.enemyPlayers[player.id - 1].y;
          const oldPosition = { playerX: x, playerY: y, playerId: player.id };
          this.props.enemyPlayers[player.id - 1].x = e.target.x();
          this.props.enemyPlayers[player.id - 1].y = e.target.y();
          this.props.onHandleUpdateEnemyPlayersPosition(
            this.props.enemyPlayers
          );
          this.props.onHandleUpdateOldPlayersPosition(oldPosition);
          this.props.onHandleDraging(false);
        }}
        dragBoundFunc={ pos => {
          let newY = pos.y < 0 ? 0 : pos.y;
          let newX = pos.x < 0 ? 0 : pos.x;
          newY = newY > 710 ? 710 : newY;
          newX = newX > 855 ? 855 : newX;
          return {
            x: newX,
            y: newY
          };
        }}
      >
        <EnemyTshirt/>
        <Text
          x={player.id < 10 ? 23 : 17}
          y={12}
          text={player.id}
          fontSize={20}
          fill="white"
          fontStyle="bold"
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
          onDragStart={e => {
            this.props.onHandleUpdatePlayersPosition(this.props.players);
            this.props.onHandleDraging(true);
          }}
          onDragEnd={e => {
            const x = this.props.players[player.id - 1].x;
            const y = this.props.players[player.id - 1].y;
            const oldPosition = { playerX: x, playerY: y, playerId: player.id };
            this.props.players[player.id - 1].x = e.target.x();
            this.props.players[player.id - 1].y = e.target.y();
            this.props.onHandleUpdatePlayersPosition(this.props.players);
            this.props.onHandleUpdateOldPlayersPosition(oldPosition);
            this.props.onHandleDraging(false);
          }}
          dragBoundFunc={ pos => {
            let newY = pos.y < 0 ? 0 : pos.y;
            let newX = pos.x < 0 ? 0 : pos.x;
            newY = newY > 710 ? 710 : newY;
            newX = newX > 855 ? 855 : newX;
            return {
              x: newX,
              y: newY
            };
          }}
        >
          <TeamTshirt key={player.id + "a"} />
          <Text
            key={player.id + "b"}
            x={player.id < 10 ? 23 : 17}
            y={12}
            text={player.id}
            fontSize={20}
            fill="white"
            fontStyle="bold"
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
        <EnemyTshirt x={180} y={20}/>
        {this.renderEnemies()}

        <TeamTshirt x={100} y={20}/>

        {this.renderPlayers(
          this.props.players,
          parseInt(this.props.playerNumber),
          this.state.playersOnField
        )}

        <Text
          text="⚽"
          fontSize={30}
          x={this.props.ballPosition[0].ballX}
          y={this.props.ballPosition[0].ballY}
          draggable
          onDragStart={() => {
            this.props.onHandleUpdateBallPosition(this.props.ballPosition);
            this.props.onHandleDraging(true);
          }}
          onDragEnd={e => {
            const newPosition = { ballX: e.target.x(), ballY: e.target.y() };
            const oldPosition = {
              ballX: this.props.ballPosition[0].ballX,
              ballY: this.props.ballPosition[0].ballY
            };
            this.props.onHandleUpdateBallPosition([newPosition, oldPosition]);
            this.props.onHandleDraging(false);
          }}
          dragBoundFunc={ pos => {
            let newY = pos.y < 0 ? 0 : pos.y;
            let newX = pos.x < 0 ? 0 : pos.x;
            newY = newY > 740 ? 740 : newY;
            newX = newX > 880 ? 880 : newX;
            return {
              x: newX,
              y: newY
            };
          }}
        />
      </>
    );
  }
}
