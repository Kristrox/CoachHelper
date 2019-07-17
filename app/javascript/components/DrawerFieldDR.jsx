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

    if (this.pen === 'down') {
      
      const ratioX = this.canvas.current.clientWidth / this.canvas.current.width;
      const ratioY = this.canvas.current.clientHeight / this.canvas.current.height;

      this.ctx.beginPath();
      this.ctx.lineWidth = this.state.lineWidth;
      this.ctx.lineCap = 'round';

      if (this.state.mode === 'draw') {
          this.ctx.strokeStyle = this.state.penColor;
      }

      this.ctx.moveTo(this.penCoords[0], this.penCoords[1]);
      this.ctx.lineTo(e.nativeEvent.offsetX / ratioX , e.nativeEvent.offsetY / ratioY);
      this.ctx.stroke();
      this.penCoords = [e.nativeEvent.offsetX / ratioX, e.nativeEvent.offsetY / ratioY];
      
    }
}

handlePenDown(e) {
  const ratioX = this.canvas.current.clientWidth / this.canvas.current.width;
  const ratioY = this.canvas.current.clientHeight / this.canvas.current.height;
  this.pen = 'down';
  this.penCoords = [e.nativeEvent.offsetX / ratioX, e.nativeEvent.offsetY / ratioY];
}

handlePenUp() {
  this.pen = 'up';
}

render() {
    return (
      <>
        <canvas ref={this.canvas} className="drawArea" width="800px" height="600px"
          onMouseMove={ (e) => this.handleDrawing(e) } 
          onMouseDown={ (e) => this.handlePenDown(e) } 
          onMouseUp={ (e) => this.handlePenUp(e) }>
        </canvas>
        <div class="drawAreaInternal">
          {this.props.onRenderColumn}
        </div>
      </>
    )
  }
}
