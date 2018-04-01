import React from 'react';
import { Link } from 'react-router-dom';

class Questions extends React.Component {
  render() {
    const { questions } = this.props;
    console.log(questions);
    console.log(this.props.match.params);
    console.log(this.props.match.params.questionId);

    let questionId;
    if (this.props.match.params != undefined) {
      questionId = this.props.match.params.questionId;
    }
    console.log('Question ID from param ', questionId);

    return (
      <section className="container">
        {
          questionId ?
            <div>
              <h1>Your question is here</h1>
            </div> :
            <div>
              <h1>Start your survey</h1>
              <div className="form-footer">
                <Link to='/' className="btn btn-secondary">Home</Link>
                <Link to='/questions/1' className="btn btn-parimary">Start</Link>
              </div>
            </div>
        }

      </section>
    );
  }
}

export default Questions
