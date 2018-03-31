import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Questions from './questions/Questions';

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route exact path='/' component={Questions}/>
        </Switch>
      </main>
    );
  }
}

export default App;
