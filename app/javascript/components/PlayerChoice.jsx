import React, { Component } from "react";

export default class PlayerChoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNumber: ""
    };
  }

  submitForm = () => {
    this.props.onClickChange(this.state.playerNumber);
  };

  onChange = e => {
    this.setState({
      playerNumber: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          Player number:{" "}
          <input type="text" name="playerNumber" onChange={this.onChange} />
          <br />
          <br />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}
