import React, { Component } from "react";

export default class Die extends Component {
  render() {
    return (
      <div className={`die die-${this.props.name}`}>
        <i className={`fas fa-dice-${this.props.value}`}></i>
      </div>
    );
  }
}
