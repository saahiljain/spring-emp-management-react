import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Users from "./components/Users";
import Dashboard from "./components/dashboard"

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <Fragment>
        <Router>
 
            {/* <Route path="/" exact={true} component={Users}/> */}
            <Route path="/" exact={true} />
            <Dashboard />
          
        </Router>
      </Fragment>
    </div>
  );
}
}
