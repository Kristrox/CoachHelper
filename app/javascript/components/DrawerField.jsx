import React, {Component} from 'react';

export default class DrawerField extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mode: 'draw',
      pen : 'up',
      lineWidth : 10,
      penColor : 'red'
    };
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.ctx = this.canvas.current.getContext('2d');
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 800, 600);
    this.ctx.lineWidth = 10;
  }

  handleDrawing(e) {

    if (this.state.pen === 'down') {
      
      this.ctx.beginPath();
      this.ctx.lineWidth = this.state.lineWidth;
      this.ctx.lineCap = 'round';

      if (this.state.mode === 'draw') {
          this.ctx.strokeStyle = this.state.penColor;
      }

      this.ctx.moveTo(this.state.penCoords[0], this.state.penCoords[1]);
      this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      this.ctx.stroke();

      this.setState({ 
          penCoords: [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
      })
    }
}

handlePenDown(e) {
  this.setState({
    pen: 'down',
    penCoords: [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
  })
}

handlePenUp() {
  this.setState({
      pen: 'up'
  })
}

render() {
    return (
      <div>
        <canvas ref={this.canvas} class="drawArea" width="800px" height="600px"
          onMouseMove={ (e) => this.handleDrawing(e) } 
          onMouseDown={ (e) => this.handlePenDown(e) } 
          onMouseUp={ (e) => this.handlePenUp(e) }>
        </canvas>
      </div>
    )
  }
}
