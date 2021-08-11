import Die from "./Die.jsx";
import React, { Component } from "react";
import "../styles/index.scss";

class RollDie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieOne: "one",
      dieTwo: "two",
      rolling: false,
    };
    this.rollDie = this.rollDie.bind(this);
    this.unShake = this.unShake.bind(this);
  }

  unShake() {
    this.setState({ rolling: false });
    document.querySelector(".Dies").classList.toggle("Die-shake");
  }

  rollDie() {
    let opts = ["one", "two", "three", "four", "five", "six"];
    let idx1 = Math.floor(Math.random() * 6),
      idx2 = Math.floor(Math.random() * 6);
    this.setState({ dieOne: opts[idx1], dieTwo: opts[idx2], rolling: true });
    document.querySelector(".Dies").classList.toggle("Die-shake");
    setTimeout(this.unShake, 1000);
  }

  render() {
    return (
      <div className="RollDie">
        <div className="Dies">
          <Die value={this.state.dieOne} name="one" />
          <Die value={this.state.dieTwo} name="two" />
        </div>
        <button onClick={this.rollDie} disabled={this.state.rolling && "disabled"}>
          {this.state.rolling ? "Rolling" : "Roll Die"}
        </button>
      </div>
    );
  }
}

export default RollDie;
