import React from 'react';
import { Link } from 'react-router-dom';

class Questions extends React.Component {
  render() {
    const { questions } = this.props;
    console.log(questions);
    console.log(this.props.match.params);
    console.log(this.props.match.params.questionId);

    const currentQuestion = questions.find(q => q.questionID ==  this.props.match.params.questionId);
    console.log(currentQuestion);
    const currentQstIndex = questions.indexOf(currentQuestion);
    console.log(currentQstIndex);
    let nextQstId;
    if(questions[currentQstIndex+1]){
      nextQstId = questions[currentQstIndex+1].questionID;
    }
    console.log('nextQstId ', nextQstId);

    return (
      <section className="container">
        {
          currentQuestion ?
            <div>
              <h1>Your question is here</h1>
            </div> :
            <div>
              <h1>Start your survey</h1>
            </div>
        }

        <div className="form-footer">
          <Link to='/' className="btn btn-secondary">Home</Link>
          <Link to={`/questions/${nextQstId}`} className="btn btn-parimary">Next</Link>
        </div>
      </section>
    );
  }
}

export default Questions
