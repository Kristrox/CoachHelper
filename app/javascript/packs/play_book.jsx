// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fullscreen from "react-full-screen";
import TopToolBar from "../components/TopToolBar";
import BottomToolBar from "../components/BottomToolBar";
import DrawerField from "../components/DrawerField";

export default class PlayBook extends Component {
  constructor(props) {
    super();

    this.state = {
      isFull: false
    };
  }

  goFull = () => {
    this.setState({ isFull: true });
  };

  render() {
    return (
      <div className="PlayBook">
        <button onClick={this.goFull}>Go Fullscreen</button>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <div className="full-screenable-node">
            <TopToolBar />
            <DrawerField />
            <BottomToolBar />
          </div>
        </Fullscreen>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<PlayBook />, document.getElementById("play_book"));
});
