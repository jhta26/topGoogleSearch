import React, { Component } from 'react';
export default class SearchBarComponent extends React.Component {
  state = {
    googleSearch: '',
    showResults: false
  };

  _handleClick = event => {
    this.props.searchGoogle({
      googleSearch: this.state.googleSearch,
      showResults: true
    });
  };
  _handleChange = event => {
    event.preventDefault();
    var search = event.target.value;
    this.setState({ googleSearch: search });
  };

  render() {
    return (
      <div className="SearchBarComponent">
        <form className="col s12">
          <div className="input-field row s6">
            <input
              placeholder="search"
              id="search"
              name="search"
              type="text"
              className="validate"
              textAlignVertical="top"
              onChange={this._handleChange}
            />
          </div>
          <div className="input-field row s6">
            <a
              className="waves-effect waves-light btn"
              onClick={this._handleClick}>
              Search
            </a>
          </div>
        </form>
      </div>
    );
  }
}
