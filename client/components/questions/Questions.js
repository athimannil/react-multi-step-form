import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAnswer } from './../../actions/answerAction';

import Progress from './../progress/Progress';
import TextInput from '../common/TextInput';
import InputRadio from '../common/InputRadio';
import SelectInput from '../common/SelectInput';
import TextAreaInput from '../common/TextAreaInput';
import InputCheckbox from '../common/InputCheckbox';

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (Array.isArray(event.answerValues)) {
      this.props.updateAnswer(event);
    } else {
      const question = event.target.name;
      const result = event.target.value;
      const newAnswer = {
        'questionID': question,
        'answerValues': result
      };
      this.props.updateAnswer(newAnswer);
    }
  }

  render() {
    const { questions, answers } = this.props;
    const currentQuestion = questions.find(q => q.questionID ==  this.props.match.params.questionId);
    const currentAnswer = answers.find( a => a.questionID.toString() === this.props.match.params.questionId );
    const currentQstIndex = questions.indexOf(currentQuestion);

    let prevQstId, nextQstId;
    if(questions[currentQstIndex-1]){
      prevQstId = questions[currentQstIndex-1].questionID;
    }

    if(questions[currentQstIndex+1]){
      nextQstId = questions[currentQstIndex+1].questionID;
    }

    const QuestionForm = currentQuestion => {
      switch (currentQuestion.type) {

      case 'text':
        return (
          <TextInput
            type="text"
            name={currentQuestion.questionID}
            label={currentQuestion.title}
            value={currentAnswer}
            onChange={this.onChange}
          />
        );

      case 'number':
        return (
          <TextInput
            type="number"
            name={currentQuestion.questionID}
            label={currentQuestion.title}
            value={currentAnswer}
            onChange={this.onChange}
            min="1"
            max="99"
          />
        );

      case 'comment':
        return(
          <TextAreaInput
            name={currentQuestion.questionID}
            label={currentQuestion.title}
            onChange={this.onChange}
            value={currentAnswer}
          />
        );

      case 'radio':
        return (
          <InputRadio
            name={currentQuestion.questionID}
            label={currentQuestion.title}
            options={currentQuestion.values}
            onChange={this.onChange}
            checked={currentAnswer}
          />
        );

      case 'checkbox':
        return (
          <InputCheckbox
            name={currentQuestion.questionID}
            label={currentQuestion.title}
            options={currentQuestion.values}
            onChange={this.onChange}
            checked={currentAnswer}
          />
        );

      case 'dropdown':
        return (
          <SelectInput
            name={currentQuestion.questionID}
            label={currentQuestion.title}
            options={currentQuestion.values}
            defaultOption="Choose avarage sleep"
            onChange={this.onChange}
            checked={currentAnswer}
          />
        );
      }
    };

    return (
      <section className="container">
        <Progress
          currentIndex={currentQstIndex}
          length={questions.length}
        />

        {
          currentQuestion ?
            <form className="form">
              {QuestionForm(currentQuestion)}

            </form> :
            <div>
              <h1>Start your survey</h1>
            </div>
        }

        <div className={`form-footer ${this.props.match.params.questionId ? '' : 'reverse-button'}`}>
          {
            this.props.match.params.questionId &&
            <Link
              to={ prevQstId ? `/questions/${prevQstId}` : '/questions/'}
              className="btn btn-secondary"
            >Previous</Link>
          }

          <Link
            to={nextQstId ? `/questions/${nextQstId}` : '/summary'}
            className={`btn btn-parimary ${currentAnswer && currentAnswer.answerValues.length ? '' : 'disabled'}`}
          >{nextQstId ? 'Next' : 'Summary'}</Link>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnswer: (answer) => {
      dispatch(updateAnswer(answer));
    }
  };
};

export default connect(null, mapDispatchToProps)(Questions);
