import GetGoogleResults from '../../requests/GetGoogleResults';

var GetGoogleResultsProcess = googleSearch => {
  return (dispatch, getState) => {
    return GetGoogleResults(googleSearch)
      .then(results => {
        dispatch({ type: 'SET_RESULTS', results: results });
        return results;
      })
      .catch(error => {
        dispatch({ type: 'GET_RESULTS_FAILED' });
      });
  };
};

export default GetGoogleResultsProcess;
