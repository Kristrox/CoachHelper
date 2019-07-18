import React, {Component} from 'react';
import { Stage, Layer } from 'react-konva';
import Drawing from './Drawing';
import Ball from './Ball';

export default class DrawerField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.checkSize();
        window.addEventListener("resize", this.checkSize);
    }

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
            <div className="DrawArea" ref={ node => { this.container = node; } }>
                <Stage width ={ this.state.stageWidth } height={ this.state.stageHeight }>
                    <Layer>
                        <Ball />
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
        );
    }
}