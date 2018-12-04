import React, { Component } from 'react';
import './App.css';
import LandingPage from "./components/LandingPage";
import FormsList from "./components/FormsList";
import Eligibility from "./components/Eligibility";
import DefendantForm from "./components/DefendantForm";
import PlaintiffForm from "./components/PlaintiffForm";

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/list" component={FormsList} />
          <Route exact path="/eligibility" component={Eligibility} />
          <Route exact path="/defendant" component={DefendantForm} /> 
          <Route exact path="/plaintiff" component={PlaintiffForm} /> 
        </Switch>
      </Router>
    );
  }
}
export default App;
