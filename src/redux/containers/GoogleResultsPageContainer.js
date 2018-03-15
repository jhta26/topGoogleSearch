import GoogleResultsPage from '../../components/GoogleResultsPage';
import { connect } from 'react-redux';
import GetGoogleResultsProcess from '../thunks/GetGoogleResultsProcess';

import { compose, lifecycle } from 'recompose';

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    searchGoogle: googleSearch => {
      dispatch(GetGoogleResultsProcess(googleSearch));
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(GoogleResultsPage);
