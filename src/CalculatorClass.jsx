import { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      opearator: "",
      curValue: 0,
      prevValue: 0,
      display: "",
    };
  }

  evaluate = (value) => {
    var x = 0;
    var curValue = this.state.curValue;
    this.setState((prevState) => {
      return {
        display: prevState.display + " " + `${value}`,
      };
    });
    // var display = this.state.display;
    if (curValue == 0) {
      x = value;
    } else {
      x = curValue * 10 + value;
    }

    this.setState((prevState) => {
      return {
        curValue: x,
      };
    });
  };

  calculate = () => {
    var curValue = this.state.curValue;
    var total = this.state.total;
    var opearator = this.state.opearator;
    var sum = 0;

    if (opearator === "") {
      sum = total + curValue;
    } else if (opearator === "A") {
      sum = total + curValue;
    } else if (opearator === "S") {
      sum = total - curValue;
    } else if (opearator === "M") {
      sum = total * curValue;
    } else if (opearator === "D") {
      sum = total / curValue;
    } else if (opearator === "P") {
      sum = total % curValue;
    }

    this.setState((prevState) => {
      return {
        total: sum,
        prevValue: prevState.curValue,
        curValue: 0,
      };
    });
  };

  operation = (value) => {
    // prevValue = curValue;
    var display = this.state.display;
    if (value === "A") {
      display = "+";
    } else if (value === "S") {
      display = "-";
    } else if (value === "M") {
      display = "*";
    } else if (value === "D") {
      display = "/";
    } else if (value === "P") {
      display = "%";
    }
    this.calculate();
    this.setState((prevState) => {
      return {
        opearator: value,
        display: prevState.display + " " + `${display}`,
      };
    });
    // }
    console.log(this.state.total);
  };

  showResult = () => {
    this.calculate();
    this.setState((prevState) => {
      return {
        curValue: 0,
        opearator: "",
        display: "",
      };
    });
  };

  change = () => {
    this.setState((prevState) => {
      return {
        total: prevState.total * -1,
      };
    });
  };

  clear = () => {
    this.setState((prevState) => {
      return {
        total: 0,
        opearator: "",
        curValue: 0,
        prevValue: 0,
        display: "",
      };
    });
  };

  render() {
    return (
      <>
        <div id="outer">
          <div id="first">
            <div>
              <h2>{this.state.display}</h2>
            </div>
            <div>
              <h2>{this.state.total}</h2>
            </div>
          </div>

          <div id="second">
            <div className="row">
              <button className="btn" onClick={() => this.clear()}>
                C
              </button>
              <button className="btn" onClick={() => this.change()}>
                +/-
              </button>
              <button className="btn" onClick={() => this.operation("P")}>
                %
              </button>
              <button className="btn" onClick={() => this.operation("A")}>
                +
              </button>
            </div>
            <div className="row">
              <button className="btn" onClick={() => this.evaluate(7)}>
                7
              </button>
              <button className="btn" onClick={() => this.evaluate(8)}>
                8
              </button>
              <button className="btn" onClick={() => this.evaluate(9)}>
                9
              </button>
              <button className="btn" onClick={() => this.operation("M")}>
                X
              </button>
            </div>
            <div className="row">
              <button className="btn" onClick={() => this.evaluate(4)}>
                4
              </button>
              <button className="btn" onClick={() => this.evaluate(5)}>
                5
              </button>
              <button className="btn" onClick={() => this.evaluate(6)}>
                6
              </button>
              <button className="btn" onClick={() => this.operation("S")}>
                -
              </button>
            </div>
            <div className="row">
              <button className="btn" onClick={() => this.evaluate(1)}>
                1
              </button>
              <button className="btn" onClick={() => this.evaluate(2)}>
                2
              </button>
              <button className="btn" onClick={() => this.evaluate(3)}>
                3
              </button>
              <button className="btn" onClick={() => this.operation("D")}>
                /
              </button>
            </div>
            <div className="row">
              <button className="btn zero">0</button>
              <button className="btn">.</button>
              <button className="btn" onClick={() => this.showResult()}>
                =
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
