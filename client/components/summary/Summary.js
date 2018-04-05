import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { questions, answers } = this.props;
    const lastQstId = questions[questions.length-1].questionID;
    const results = answers.map(answer => {
      const question = questions.find(q => q.questionID == answer.questionID);
      let aValues =
        answer.answerValues instanceof Array
          ? answer.answerValues
          : [answer.answerValues];

      aValues = aValues.map(value => {
        const qObj = question.values.find(q => q.id === value);
        return qObj ? qObj.value : value;
      });

      return {
        title: question.title,
        value: aValues.join(', ')
      };
    });

    return(
      <section className="container">
        <h1>Summary</h1>
        <ul className="summary">
          {
            results.map((result, i) => {
              return (
                <li key={i}>
                  <h3 className="summary-question">{result.title}</h3>
                  <p>{result.value}</p>
                </li>
              );
            })
          }
        </ul>
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
