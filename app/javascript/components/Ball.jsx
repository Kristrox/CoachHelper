import React, {Component} from 'react';
import { Text, Group } from 'react-konva';

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
            <Group draggable x={ this.state.x } y={ this.state.y } onDragEnd={ this.handleDragEnd }>
                <Text 
                    text="⚽" 
                    fontSize={ 30 }
                />
                <Text 
                    text={1} 
                    fontSize={ 30 }
                 />
            </Group>
        );
    }
}