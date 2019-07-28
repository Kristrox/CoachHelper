import React, { Component } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import useImage from "use-image";
import Drag from "../components/DragAndDropOnField.jsx";
import PlayerChoice from "./PlayerChoice";
import CustomArrow from "./CustomArrow";
import field from "./field.png";

const FootballFiledImage = () => {
  const [image] = useImage(field);
  return <Image image={image} width={907} height={750}/>;
};

export default class DrawerField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 0,
      arrowStartPos: { x: 0, y: 0 },
      arrowEndPos: { x: 0, y: 0 },
      countClick: 0,
      lines: this.props.lines,
      isDrawing: false
    };
  }


  handleMouseDown = () => {
    this.setState({isDrawing: true})
    this.setState({
      lines: [...this.state.lines, []]
    });

    const stage = this.stageRef.getStage();
    const point = stage.getPointerPosition();

    if (this.props.startDrawingArrows === true) {
        let localPos = {
        x: point.x,
        y: point.y
      };
      this.handleDrawingArrows(localPos);
      this.setState({ isDrawing: false });
    }
  };

  handleMouseMove = () => {
    if (this.state.isDrawing) {
    const stage = this.stageRef.getStage();
    const point = stage.getPointerPosition();
    const lines = this.state.lines;

    let lastLine = lines[lines.length - 1];
    lastLine = lastLine.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    this.state.lines.concat()
    this.setState({
      lines: lines.concat()
    });
    }
  };

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
    if (this.props.startDrawingArrows === false) {
      this.props.onHandleUpdateLines(this.state.lines);
    };
  };

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

  handleExportClick = () => {
    console.log(this.stageRef.getStage().toDataURL());
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
          <div className="DrrawAreaBg">
            <Stage
              width={this.state.stageWidth}
              height={window.innerHeight}
              onContentMousedown={this.handleMouseDown}
              onContentMousemove={this.handleMouseMove}
              onContentMouseup={this.handleMouseUp}
              listening={this.props.stopDrawing}
              ref={node => {
                this.stageRef = node;
              }}
            >
              <Layer>
                <FootballFiledImage />
              </Layer>
              <Layer>
                <Drag
                  playerNumber={this.state.playerNumber}
                  width={this.state.stageWidth}
                  height={window.innerHeight}
                  ballPosition={this.props.ballPosition}
                  players={this.props.players}
                  enemyPlayers={this.props.enemyPlayers}
                  onHandleUpdateBallPosition={
                    this.props.onHandleUpdateBallPosition
                  }
                  onHandleUpdateOldPlayersPosition={
                    this.props.onHandleUpdateOldPlayersPosition
                  }
                  onHandleUpdateEnemyPlayersPosition={
                    this.props.onHandleUpdateEnemyPlayersPosition
                  }
                  onHandleUpdatePlayersPosition={
                    this.props.onHandleUpdatePlayersPosition
                  }
                />
              </Layer>
              <Layer>
                {this.state.lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line}
                    stroke="red"
                    strokeWidth={5}
                    lineCap="round"
                    lineJoin="round"
                  />
                ))}
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
            <button
              style={{ position: "absolute", top: "0" }}
              onClick={this.handleExportClick}
            >
              Export stage
            </button>
          </div>
        </div>
      </>
    );
  }
}
