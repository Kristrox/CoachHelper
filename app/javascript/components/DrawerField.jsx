import React from 'react';
import { Stage, Layer } from 'react-konva';
import Drawing from './Drawing';
import Ball from './Ball';

export default class DrawerField extends React.Component {
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
        this.setState({ stageWidth: width });
    }

    render() {
        return (
            <div className="drawArea" ref={ node => { this.container = node; } }>
                <Stage width ={ this.state.stageWidth } height={ window.innerHeight }>
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