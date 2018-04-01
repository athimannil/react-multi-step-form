const answerReducer = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_ANSWER':
    return [
      ...state.filter( q => q.questionID !== action.payload.questionID),
      action.payload
    ];

  default:
    return state;
  }
};

export default answerReducer;
