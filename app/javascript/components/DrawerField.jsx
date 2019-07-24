import React, {Component} from 'react';
import { Stage, Layer } from 'react-konva';
import Drawing from './Drawing';
import Drag from '../components/DragAndDropOnField.jsx';
import PlayerChoice from "./PlayerChoice";
import CustomArrow from "./CustomArrow"

export default class DrawerField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerNumber: 0,
            arrowStartPos: { x: 0, y: 0 },
            arrowEndPos: { x: 0, y: 0 },
            countClick: 0,
            itemArray: [],
        };
    }

    componentDidMount() {
        this.checkSize();
        window.addEventListener("resize", this.checkSize);
    }

    handleDrawingArrows = localPos => {

        const item = this.state.itemArray;
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
                 arrowEndPos: { x: localPos.x, y: localPos.y  },
                 countClick: 1
            });
        } else if(this.state.countClick == 1) {
  
            this.setState({
                arrowEndPos: { x: localPos.x, y: localPos.y  },
                countClick: 0
            });

            item.push({
                arrowStartPos: this.state.arrowStartPos,
                arrowEndPos: this.state.arrowEndPos,
                dashed: dashed
            });

            this.setState({
                itemArray: item,
            });    
        }
    }

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
    }

    render() {
        return (
            <>
            <PlayerChoice onClickChange={ this.handleClick }/>
                <div className="DrawArea" ref={ node => { this.container = node; } }>
                    <div className="DrawAreaBg">
                        <Stage  width ={ this.state.stageWidth } height={ window.innerHeight}>
                            <Layer>
                                <Drag 
                                playerNumber={this.state.playerNumber}
                                width ={ this.state.stageWidth } 
                                height={ window.innerHeight } 
                                />              
                            </Layer>
                            <Layer>
                                <Drawing
                                width ={ this.state.stageWidth } 
                                height={ window.innerHeight } 
                                stopDrawing={ this.props.stopDrawing } 
                                startDrawingArrows={ this.props.startDrawingArrows }
                                onHandleDrawingArrows={ this.handleDrawingArrows }
                                />
                            </Layer>
                            <Layer>
                            <CustomArrow
                                startPos={ this.state.arrowStartPos } 
                                endPos={ this.state.arrowEndPos }
                                dashed={ this.state.dashed }
                             />
                              {this.state.itemArray.map((item, index) => {
                                return (
                                    <CustomArrow key={index}
                                    startPos={ item.arrowStartPos } 
                                    endPos={ item.arrowEndPos }
                                    dashed={ item.dashed }
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