import React from "react";
import PropTypes from "prop-types";
class SideBar extends React.Component {
  render() {
    let styles = {
      margin: "20px",
      padding: "0px",
      width: "250px",
      height: "250px",
      fontSize: "25px",
      border: "3px dotted black"
    };

    return (
      <div id={styles}>
        <ul id={sidebar}>
          <div>
            className={"sidebar-header"}><h3>Bootstrap Sidebar</h3>
          </div>
          <li> Lista zawodników </li>
          <li> Terminarz </li>
          <li> Playbook </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
