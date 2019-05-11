import React, { Component } from "react";
import "./App.css";
import CalcResult from "./component/result";
import KeyPad from "./component/keypad";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.clear();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";

    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "Error"
      });
    }
  };

  clear = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="calculator-body">
        <h1>React Calculator</h1>
        <CalcResult result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
