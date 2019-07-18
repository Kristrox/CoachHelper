import React, {Component} from 'react';
import { Text } from 'react-konva';

export default class Ball extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x: 500,
            y: 50,
        };
    }

    handleDragEnd = (e) => {
        this.setState({ 
            x: e.target.x(),
            y: e.target.y(),
        });
    }

    render() {
        return (
            <Text 
                text="⚽" 
                fontSize={ 30 }
                x={ this.state.x }
                y={ this.state.y }
                draggable
                onDragEnd={ this.handleDragEnd } 
            />
        );
    }
}