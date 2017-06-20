import React from "react";
import ReactDOM from "react-dom";

var Card = React.createClass({
  render: function() {
      var cardStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
      };

      return (
        <div style={cardStyle}>
        <Square {...this.props}/>
        <Label {...this.props}/>
        </div>
      );
    }
});

var Label = React.createClass({
  render: function() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return (
      <p style={labelStyle}>{this.props.other}</p>
    );
  }
});

var Square = React.createClass({
  render: function() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.bgColor
    };
    return(
      <div style={squareStyle}>

      </div>
    );
  }
});

ReactDOM.render(
  <div>
   <Card bgColor="#FF00FF" other="123"/>
  </div>,
  document.querySelector("#container")
);