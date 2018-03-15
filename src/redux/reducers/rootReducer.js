export default function rootReducer(
  currentState = {
    results: null,
    showResults: false
  },
  action
) {
  switch (action.type) {
    case 'SET_RESULTS':
      var newResults = currentState.results;
      newResults = action.results;
      return { ...currentState, results: newResults, showResults: true };
  }
}
