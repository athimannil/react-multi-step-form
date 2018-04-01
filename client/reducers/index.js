import { combineReducers } from 'redux';

import questions from './questionReducer';
import answers from './answerReducer';

export default combineReducers({
  questions,
  answers
});
