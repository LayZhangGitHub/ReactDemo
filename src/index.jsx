import React from "react";
import ReactDOM from "react-dom";
// import Router from "react-router";

var Card = React.createClass({
  /** init
   * 1.getInitialState
   * 2.getDefaultProps
   * 3.componentWillMount
   * 4.render
   * 5.componentDidMount
   */

  /** state change
   * 1.shouldComponentUpdate
   * 2.componentWillUpdate
   * 3.render
   * 4.componentDidUpdate
   */

  /** prop change
   * 1.componentWillReceiveProps
   * 2.shouldComponentUpdate
   * 3.componentWillUpdate
   * 4.render
   * 5.componentDidUpdate
   */

  /** unmount
   * 1.componentWillUnmount
   */

  // getState
  getInitialState: function () {
    console.log("getInitialState")
    return {
      bgColor: 0
    };
  },
  // getProps
  getDefaultProps: function () {
    console.log("getDefaultProps")
    return {};
  },
  componentWillMount: function () {
    console.log("componentWillMount")
  },
  componentDidMount: function () {
    console.log("componentDidMount")
    setInterval(this.timerTick, 1000);
  },
  componentWillUnmount: function () {
    console.log("componentWillUnmount")
  },
  componentWillUpdate: function () {
    console.log("componentWillUpdate")
  },
  componentDidUpdate: function () {
    console.log("componentDidUpdate")
  },
  shouldComponentUpdate: function () {
    console.log("shouldComponentUpdate")
    return true
  },
  componentWillReceiveProps: function () {
    console.log("componentWillReceiveProps")
  },
  timerTick: function () {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random() * colors.length);
    this.setState({

      bgColor: colors[ran]
    });
  },
  render: function () {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };
    console.log("render....");
    return (


      <div style={cardStyle}>
        <Square bgColor={this.state.bgColor} />
        <Label bgColor={this.state.bgColor} />
      </div>
    );
  }
});

var Label = React.createClass({
  render: function () {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return (
      <p style={labelStyle}>{this.props.bgColor}</p>
    );
  }
});

var Square = React.createClass({
  render: function () {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.bgColor
    };
    return (
      <div style={squareStyle}>

      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Card />
  </div>,
  document.querySelector("#container")

);