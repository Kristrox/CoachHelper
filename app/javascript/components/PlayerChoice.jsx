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
      <div className="PlayerNumberChoice" >
        <form>
          Player number:{" "}
          <input type="text" name="playerNumber" onChange={this.onChange} />
          <input className="PlayerNumberChoiceButton btn btn-success" type="button" value="Submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}
