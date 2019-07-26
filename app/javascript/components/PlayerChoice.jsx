import React, { Component } from "react";
import axios from "axios";

export default class PlayerChoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNumber: "",
      players: [],
      isLoading: false
    };
  }

  fetchPlayers = () => {
    axios
      .get("/api/v1/players.json", {
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
            .content
        }
      })
      .then(response => {
        this.setState({ players: response.data.data, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchPlayers();
  }

  submitForm = () => {
    this.props.onClickChange(this.state.playerNumber);
  };

  onChange = e => {
    this.setState({
      playerNumber: e.target.value
    });
    this.props.onClickChange(e.target.value);
  };

  render() {
    return (
      <div className="PlayerNumberChoice">
        <select onChange={this.onChange}>
          {this.state.players.map(player => (
            <option value={player.number} key={player.id}>
              {player.name + " " + player.surname + " " + player.number}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
