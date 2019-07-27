// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fullscreen from "react-full-screen";
import TopToolBar from "../components/TopToolBar";
import DrawerField from "../components/DrawerField";
import axios from "axios";

export default class PlayBook extends Component {
  constructor(props) {
    super(props);

    const canvas = document.createElement("canvas");
    const canvasWidth = 800;
    const canvasHeight = 600;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    this.state = {
      canvas: canvas,
      context: canvas.getContext("2d"),
      actionNumber: 0,
      isFull: false,
      isDrawingArrows: false,
      dashed: false,
      saved: false,
      name: "",
      imageData: [],
      arrwosArray: [],
      oldCanvas: null,
      ballPosition: [{ ballX: 50, ballY: 20 }, { ballX: 50, ballY: 20 }],
      players: this.addPlayersToInitialList(99, "ourTeam"),
      enemyPlayers: this.addPlayersToInitialList(18, "enemy")
    };

    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleStartDrowingArrows = this.handleStartDrowingArrows.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleUpdateArrowsPosition = this.handleUpdateArrowsPosition.bind(this);
    this.handleUpdateBallPosition = this.handleUpdateBallPosition.bind(this);
    this.handleUpdateEnemyPlayersPosition = this.handleUpdateEnemyPlayersPosition.bind(this);
    this.handleUpdateOldPlayersPosition = this.handleUpdateOldPlayersPosition.bind(this);
    this.handleUpdatePlayersPosition = this.handleUpdatePlayersPosition.bind(this);
    this.handleUpdateOldCanvas = this.handleUpdateOldCanvas.bind(this);

    //Zapis zagrywki
    this.setImageData = this.setImageData.bind(this);
    this.changeName = this.changeName.bind(this);
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

  //---------------------------
  //Zapis zagrywki
  //---------------------------
  changeName(newName) {
    this.setState({ name: newName });
  }

  setImageData(newImageData) {
    this.setState({ imageData: newImageData });
  }

  handleSave() {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();


    const data = canvas.toDataURL();

    axios
      .post(
        "/play_books.json",
        { play_book: { name: this.state.name, data_uri: data } },
        {
          headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
              .content
          }
        }
      )
      .then(() => {
        this.props.fetchPosts();
      });

    this.setState({
      saved: true
    });
  }
  //---------------------------
  //Koniec zapisu zagrywki
  //---------------------------

  handleFullScreen() {
    this.setState({ isFull: true });
  }

  handleStartDrowingArrows(dashed) {
    this.setState(previousState => ({
      isDrawingArrows: !previousState.isDrawingArrows,
      dashed: dashed
    }));
  }

  handleUndo() {
    const playersPosition = this.state.players;
    const enemyPlayersPosition = this.state.enemyPlayers;
    const playersOldPosition = this.state.oldPlayerPosition;

    switch (this.state.actionNumber) {
      case 1:
        const arrows = this.state.arrwosArray;
        arrows.pop();
        this.setState({
          arrwosArray: arrows,
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
        enemyPlayersPosition[playersOldPosition.playerId - 1].x =
          playersOldPosition.playerX;
        enemyPlayersPosition[playersOldPosition.playerId - 1].y =
          playersOldPosition.playerY;
        this.setState({
          enemyPlayers: enemyPlayersPosition,
          actionNumber: 0
        });
        break;

      case 4:
        playersPosition[playersOldPosition.playerId - 1].x =
          playersOldPosition.playerX;
        playersPosition[playersOldPosition.playerId - 1].y =
          playersOldPosition.playerY;
        this.setState({
          players: playersPosition,
          actionNumber: 0
        });
        break;

      case 5:
        // let canvasPic = new Image();
        // canvasPic.onload = function() {
        //   this.state.context.drawImage(canvasPic, 0, 0);
        // }
        // canvasPic.src = this.state.oldCanvas;
        // canvasPic = this.state.context.drawImage(canvasPic, 0, 0);

       console.log(this.state.oldCanvas)
    // console.log(this.state.context.drawImage(canvasPic, 0, 0))
    // canvas = this.state.context.drawImage(canvasPic, 0, 0)
        this.setState({
          canvas: this.state.oldCanvas,
          context: this.state.oldCanvas.getContext("2d")
        })
        break;
    }
  }

  handleUpdateArrowsPosition(arrwosArray) {
    this.setState({
      arrwosArray: arrwosArray,
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

  handleUpdatePlayersPosition(playersPosition) {
    this.setState({
      players: playersPosition,
      actionNumber: 4
    });
  }

  handleUpdateOldCanvas(oldCanvas) {
    this.setState({
      oldCanvas: oldCanvas,
      actionNumber: 5
    });
  }

  handleUpdateOldPlayersPosition(playersPosition) {
    this.setState({
      oldPlayerPosition: playersPosition
    });
  }

  render() {
    return (
      <div className="PlayBook">
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <div className="full-screenable-node d-flex flex-column">
            <TopToolBar
              onChangeToFullScreen={this.handleFullScreen}
              onHandleStartDrowingArrows={this.handleStartDrowingArrows}
              onHandleSave={this.handleSave}
              onChangeName={this.changeName}
              onHandleUndo={this.handleUndo}
            />
            <DrawerField
              startDrawingArrows={this.state.isDrawingArrows}
              startDrawingArrowsDashed={this.state.dashed}
              arrwosArray={this.state.arrwosArray}
              players={this.state.players}
              enemyPlayers={this.state.enemyPlayers}
              ballPosition={this.state.ballPosition}
              canvas={this.state.canvas}
              context={this.state.context}
              onHandleUpdateArrowsPosition={this.handleUpdateArrowsPosition}
              onHandleUpdateBallPosition={this.handleUpdateBallPosition}
              onHandleUpdateOldPlayersPosition={this.handleUpdateOldPlayersPosition}
              onHandleUpdateEnemyPlayersPosition={this.handleUpdateEnemyPlayersPosition}
              onHandleUpdatePlayersPosition={this.handleUpdatePlayersPosition}
              onHandleUpdateOldCanvas={this.handleUpdateOldCanvas}
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
