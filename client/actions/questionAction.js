export function loadQuestionsSuccess(questions) {
  return {
    type: 'LOAD_QUESTIONS',
    payload: questions
  };
}

export function loadQuestions() {
  return function (dispatch) {
    fetch('/api/')
      .then((response) => response.json())
      .then(responseJson => {
        dispatch(loadQuestionsSuccess(responseJson));
      }).catch(error => {
        throw(error);
      });
  };
}
