import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    const { questions, answers } = this.props;
    console.log(questions, answers);
    const lastQstId= questions[questions.length-1].questionID;
    return(
      <section className="container">
        <h1>Summary</h1>
        <div className="form-footer">
          <Link
            to={ `/questions/${lastQstId}`}
            className="btn btn-secondary"
          >Back</Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers
  };
};

export default connect(mapStateToProps, null)(Summary);
