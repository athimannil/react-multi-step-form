import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
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
    const { questions } = this.props;

    return (
      <main className="main">
        <Switch>
          <Route exact path='/' render={() => ( <Redirect to='/questions/'/>)} />
          <Route path='/questions/:questionId*'
            render={ (props) => <Questions questions={questions} {...props} />} />
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
