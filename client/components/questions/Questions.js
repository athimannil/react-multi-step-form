import React from 'react';
import { Link } from 'react-router-dom';

class Questions extends React.Component {
  render() {
    const { questions } = this.props;

    const currentQuestion = questions.find(q => q.questionID ==  this.props.match.params.questionId);
    const currentQstIndex = questions.indexOf(currentQuestion);
console.log('currentQuestion');
console.log(currentQuestion);
    let prevQstId, nextQstId;
    if(questions[currentQstIndex-1]){
      prevQstId = questions[currentQstIndex-1].questionID;
    }

    if(questions[currentQstIndex+1]){
      nextQstId = questions[currentQstIndex+1].questionID;
    }

    return (
      <section className="container">
        {
          currentQuestion ?
            <form className="form-wrapper">
              <h2>{currentQuestion.title}</h2>
            </form> :
            <div>
              <h1>Start your survey</h1>
            </div>
        }

        <div className="form-footer">
          <Link to={ prevQstId ? `/questions/${prevQstId}` : '/questions/'} className="btn btn-secondary">Previous</Link>
          <Link to={`/questions/${nextQstId}`} className="btn btn-parimary">Next</Link>
        </div>
      </section>
    );
  }
}

export default Questions
