import React, { Component } from 'react';
import './App.css';
import setupStore from './redux/setupStore';
import { Provider } from 'react-redux';
import GoogleResultsPageContainer from './redux/containers/GoogleResultsPageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GoogleResultsPageContainer />
      </Provider>
    );
  }
}
