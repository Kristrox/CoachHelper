import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import Drawing from "./Drawing";
import Drag from "../components/DragAndDropOnField.jsx";
import PlayerChoice from "./PlayerChoice";
import CustomArrow from "./CustomArrow";

export default class DrawerField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 0,
      arrowStartPos: { x: 0, y: 0 },
      arrowEndPos: { x: 0, y: 0 },
      countClick: 0,
    };
  }

  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize);
  }

  handleDrawingArrows = localPos => {
    this.setState({
      fill: "red",
      stroke: "red"
    });

    const arrows = this.props.arrwosArray;
    let dashed = [0, 0];
    this.setState({
      dashed: dashed
    });

    if (this.props.startDrawingArrowsDashed) {
      dashed = [30, 10];
      this.setState({
        dashed: dashed
      });
    }

    if (this.state.countClick == 0) {
      this.setState({
        arrowStartPos: { x: localPos.x, y: localPos.y },
        arrowEndPos: { x: localPos.x, y: localPos.y },
        countClick: 1
      });
    } else if (this.state.countClick == 1) {
      this.setState({
        arrowEndPos: { x: localPos.x, y: localPos.y },
        countClick: 0
      });

      arrows.push({
        arrowStartPos: this.state.arrowStartPos,
        arrowEndPos: this.state.arrowEndPos,
        dashed: dashed
      });

      this.props.onHandleUpdateArrowsPosition(arrows);

      this.setState({
        arrowStartPos: { x: 0, y: 0 },
        arrowEndPos: { x: 0, y: 0 },
        fill: "transparent",
        stroke: "transparent"
      });
    }
  };

  handleClick = playerNumber => {
    this.setState({
      playerNumber: playerNumber
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    const width = this.container.offsetWidth;
    const height = this.container.offsetHeight;
    this.setState({
      stageWidth: width,
      stageHeight: height
    });
  };

  render() {
    return (
      <>
        <PlayerChoice onClickChange={this.handleClick} />
        <div
          className="DrawArea"
          ref={node => {
            this.container = node;
          }}
        >
          <div className="DrawAreaBg">
            <Stage width={this.state.stageWidth} height={window.innerHeight}>
              <Layer>
                <Drag
                  playerNumber={this.state.playerNumber}
                  width={this.state.stageWidth}
                  height={window.innerHeight}
                  ballPosition={this.props.ballPosition}
                  players={this.props.players}
                  enemyPlayers={this.props.enemyPlayers}
                  onHandleUpdateBallPosition={this.props.onHandleUpdateBallPosition}
                  onHandleUpdateOldPlayersPosition={this.props.onHandleUpdateOldPlayersPosition}
                  onHandleUpdateEnemyPlayersPosition={this.props.onHandleUpdateEnemyPlayersPosition}
                  onHandleUpdatePlayersPosition={this.props.onHandleUpdatePlayersPosition}
                />
              </Layer>
              <Layer>
                <Drawing
                  width={this.state.stageWidth}
                  height={window.innerHeight}
                  stopDrawing={this.props.stopDrawing}
                  startDrawingArrows={this.props.startDrawingArrows}
                  onHandleDrawingArrows={this.handleDrawingArrows}
                />
              </Layer>
              <Layer>
                <CustomArrow
                  startPos={this.state.arrowStartPos}
                  endPos={this.state.arrowEndPos}
                  dashed={this.state.dashed}
                  fill={this.state.fill}
                  stroke={this.state.stroke}
                />
                {this.props.arrwosArray.map((arrows, index) => {
                  return (
                    <CustomArrow
                      key={index}
                      startPos={arrows.arrowStartPos}
                      endPos={arrows.arrowEndPos}
                      dashed={arrows.dashed}
                      fill={"red"}
                      stroke={"red"}
                    />
                  );
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </>
    );
  }
}
