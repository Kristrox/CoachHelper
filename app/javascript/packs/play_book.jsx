// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fullscreen from 'react-full-screen';
import TopToolBar from '../components/TopToolBar';
import BottomToolBar from '../components/BottomToolBar';
import DrawerField from '../components/DrawerField';

export default class PlayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFull: false,
      isDrawing: true,
    };

    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleStopDrawing = this.handleStopDrawing.bind(this);
    this.handleCopyTshirt = this.handleCopyTshirt.bind(this);
  }

  handleFullScreen() {
    this.setState({ isFull: true });
  }

  handleStopDrawing() {
    this.setState(previousState => ({ isDrawing: !previousState.isDrawing }))
  }

  handleCopyTshirt(tshirt) {
    this.setState({
      tShirt: tshirt,
    })

    console.log(this.state.tshirt)
  }

  render() {
    return (
      <div className="PlayBook">
        <Fullscreen enabled={ this.state.isFull } onChange={ isFull => this.setState({ isFull }) }>
          <div className="full-screenable-node d-flex flex-column">
            <TopToolBar onCopyTshirt={ this.handleCopyTshirt } onChangeToFullScreen={ this.handleFullScreen } />
            <DrawerField stopDrawing={ this.state.isDrawing }/>
            <BottomToolBar onHandleStopDrawing={ this.handleStopDrawing } />
          </div>
        </Fullscreen>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<PlayBook />, document.getElementById("play_book"));
});
