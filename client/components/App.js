import React, { Component } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadQuestions } from './../actions/questionAction';

import Questions from './questions/Questions';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    console.log(this.props);
    const { questions } = this.props;
    console.log(questions);
    return (
      <main className="main">
        <Switch>
          <Route exact path='/' component={Questions}/>
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: () => {
      dispatch(loadQuestions());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
