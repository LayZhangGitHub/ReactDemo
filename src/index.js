import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Test from "./test";
import Card from './card'
import Main from './main'
import App from './app'

ReactDOM.render(
  // <div>
  //   <Card />
  // </div>,
  // <Router history={hashHistory}>
  // {/**
  //  *<Route path="/" component={Main} />
  //   <Route path="/card" component={Card} />
  //   <Route path="/test" component={Test} /> 
  //  */}
  //   <Route path="/app" component={App} />
  // </Router>,
  <App />,
  document.querySelector("#container")

);