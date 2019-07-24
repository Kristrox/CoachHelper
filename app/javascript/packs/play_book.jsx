// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fullscreen from "react-full-screen";
import TopToolBar from "../components/TopToolBar";
import DrawerField from "../components/DrawerField";

export default class PlayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFull: false,
      isDrawing: true,
      isDrawingArrows: false,
      dashed: false
    };

    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleStopDrawing = this.handleStopDrawing.bind(this);
    this.handleStartDrowingArrows = this.handleStartDrowingArrows.bind(this);
  }

  handleFullScreen() {
    this.setState({ isFull: true });
  }

  handleStopDrawing() {
    this.setState(previousState => ({ isDrawing: !previousState.isDrawing }));
  }

  handleStartDrowingArrows(dashed) {
    this.setState(previousState => ({
      isDrawingArrows: !previousState.isDrawingArrows,
      dashed: dashed
    }));
    console.log(this.state.dashed);
  }

  render() {
    return (
      <div className="PlayBook">
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <div className="full-screenable-node d-flex flex-column">
            <TopToolBar
              onHandleStopDrawing={this.handleStopDrawing}
              onChangeToFullScreen={this.handleFullScreen}
              onHandleStartDrowingArrows={this.handleStartDrowingArrows}
            />
            <DrawerField
              stopDrawing={this.state.isDrawing}
              startDrawingArrows={this.state.isDrawingArrows}
              startDrawingArrowsDashed={this.state.dashed}
            />
          </div>
        </Fullscreen>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<PlayBook />, document.getElementById("play_book"));
});
