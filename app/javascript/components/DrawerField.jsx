import React, {Component} from 'react';
import { Stage, Layer } from 'react-konva';
import Drawing from './Drawing';
import Drag from '../components/DragAndDropOnField.jsx';
import PlayerChoice from "./PlayerChoice";


export default class DrawerField extends Component {
    constructor(props) {
        super(props);
        this.state = {playerNumber: 0};
    }

    componentDidMount() {
        this.checkSize();
        window.addEventListener("resize", this.checkSize);
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
            <PlayerChoice onClickChange={this.handleClick}/>
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
                                />
                            </Layer>
                        </Stage>
                    </div> 
                </div>
            </>
        );
    }
}