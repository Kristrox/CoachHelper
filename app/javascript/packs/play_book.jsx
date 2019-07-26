// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fullscreen from "react-full-screen";
import TopToolBar from "../components/TopToolBar";
import DrawerField from "../components/DrawerField";
import axios from "axios";

export default class PlayBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFull: false,
      isDrawing: true,
      isDrawingArrows: false,
      dashed: false,
      saved: false,
      name: "",
      imageData
    };

    this.handleFullScreen = this.handleFullScreen.bind(this);
    this.handleStopDrawing = this.handleStopDrawing.bind(this);
    this.handleStartDrowingArrows = this.handleStartDrowingArrows.bind(this);
    this.handleSave = this.handleSave.bind(this);

    //Zapis zagrywki
    this.setImageData = this.setImageData.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  //---------------------------
  //Zapis zagrywki
  //---------------------------
  changeName(newName) {
    this.setState({ name: newName });
  }

  setImageData(newImageData) {
    this.setState({ imageData: newImageData });
  }

  handleSave() {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();

    console.log("Save Image Started!");

    const data = canvas.toDataURL();

    axios
      .post(
        "/play_books.json",
        { play_book: { name: this.state.name, data_uri: data } },
        {
          headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
              .content
          }
        }
      )
      .then(() => {
        this.props.fetchPosts();
      });

    this.setState({
      saved: true
    });
  }
  //---------------------------
  //Koniec zapisu zagrywki
  //---------------------------

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
              onHandleSave={this.handleSave}
              onChangeName={this.changeName}
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
