// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fullscreen from 'react-full-screen';
import TopToolBar from '../components/TopToolBar';
import DrawerField from '../components/DrawerField';

export default class PlayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionNumber: 0,
      isFull: false,
      isDrawing: true,
      isDrawingArrows: false,
      dashed: false,
      itemArray: [],
      ballPosition: [{ ballX: 50, ballY: 20 }, { ballX: 50, ballY: 20 }],
      players: this.addPlayersToInitialList(99, "ourTeam"),
      enemyPlayers: this.addPlayersToInitialList(18, "enemy"),
    };

    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleStopDrawing = this.handleStopDrawing.bind(this);
    this.handleStartDrowingArrows = this.handleStartDrowingArrows.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleUpdateArrowsPosition = this.handleUpdateArrowsPosition.bind(this);
    this.handleUpdateBallPosition = this.handleUpdateBallPosition.bind(this);
    this.handleUpdateEnemyPlayersPosition = this.handleUpdateEnemyPlayersPosition.bind(this);
    this.handleUpdateOldPlayersPosition = this.handleUpdateOldPlayersPosition.bind(this);
  }

  addPlayersToInitialList(playerNumber, team) {
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

  handleFullScreen() {
    this.setState({ isFull: true });
  }

  handleStopDrawing() {
    this.setState(previousState => ({
       isDrawing: !previousState.isDrawing 
      }));
  }

  handleStartDrowingArrows(dashed) {
    this.setState(previousState => ({ 
      isDrawingArrows: !previousState.isDrawingArrows,
      dashed: dashed
     }));
  }

  handleUndo() {
    switch (this.state.actionNumber) {
      case 1:
        const item = this.state.itemArray;
        item.pop();
        this.setState({
          itemArray: item,
          actionNumber: 0
        });
      break;

      case 2:
        const ballPosition = this.state.ballPosition;
        ballPosition.reverse();
        this.setState({
          ballPosition: ballPosition,
          actionNumber: 0
        });
      break;

      case 3:
        const playersPosition = this.state.enemyPlayers;
        const playersOldPosition = this.state.oldPlayerPosition;
        playersPosition[playersOldPosition.playerId - 1].x = playersOldPosition.playerX;
        playersPosition[playersOldPosition.playerId - 1].y = playersOldPosition.playerY;
          this.setState({
            players: playersPosition,
            actionNumber: 0
          });
      break;
    }
  }

  handleUpdateArrowsPosition(itemArray) {
    this.setState({
      itemArray: itemArray,
      actionNumber: 1
    });
  }

  handleUpdateBallPosition(ballPosition) {
    this.setState({
      ballPosition: ballPosition,
      actionNumber: 2
    });
  }

  handleUpdateEnemyPlayersPosition(playersPosition) {
    this.setState({
      enemyPlayers: playersPosition,
      actionNumber: 3
    });
  }

  handleUpdateOldPlayersPosition(playersPosition) {
    this.setState({
      oldPlayerPosition: playersPosition,
      actionNumber: 4
    });
  }

  handleUpdateOldPlayersPosition(playersPosition) {
    this.setState({
      oldPlayerPosition: playersPosition,
      actionNumber: 3
    });
  }


  render() {
    return (
      <div className="PlayBook">
        <Fullscreen
          enabled={ this.state.isFull }
          onChange={ isFull => this.setState({ isFull }) }
        >
          <div className="full-screenable-node d-flex flex-column">
            <TopToolBar 
              onHandleStopDrawing={ this.handleStopDrawing }
              onChangeToFullScreen={ this.handleFullScreen}
              onHandleStartDrowingArrows={ this.handleStartDrowingArrows } 
              onhandleUndo={ this.handleUndo }
            />
            <DrawerField 
              stopDrawing={ this.state.isDrawing }
              startDrawingArrows={ this.state.isDrawingArrows }
              startDrawingArrowsDashed={ this.state.dashed }
              onHandleUpdateArrowsPosition={ this.handleUpdateArrowsPosition }
              itemArray={ this.state.itemArray }
              ballPosition={ this.state.ballPosition }
              onhandleUpdateBallPosition={ this.handleUpdateBallPosition }
              onHandleUpdateOldPlayersPosition={ this.handleUpdateOldPlayersPosition }
              onHandleUpdateEnemyPlayersPosition={ this.handleUpdateEnemyPlayersPosition }
              players={ this.state.players }
              enemyPlayers={ this.state.enemyPlayers }
            />
          </div>
        </Fullscreen>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<PlayBook />, document.getElementById("play_book"));
});
