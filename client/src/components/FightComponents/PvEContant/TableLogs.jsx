import React from "react";
import "./../pveboard.css";

class TableLogs extends React.Component {
  get dontGenerateLogs() {
    return (
      <ul className="logs-elements">
        <li> Ожидание начала боя </li>
      </ul>
    );
  }

  get generateLogs() {
    return (
      <ul className="logs-elements">
        {this.props.logs.map((element, index) => (
          <li key={index} className="logs-element">
            {" "}
            {element}{" "}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        {this.props.logs === null ? this.dontGenerateLogs : this.generateLogs}
      </>
    );
  }
}

export default TableLogs;
