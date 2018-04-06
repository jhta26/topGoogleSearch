import React, { Component } from 'react';

var ResultsComponent = ({ results }) => {
  var realResults = results ? results : [{ title: 'title', URL: 'url' }];
  var title = realResults.title;
  var url = realResults.URL;
  var image = realResults.image

  return (
    <div className="ResultsComponent center-align animated flipInY">
      <h5>Top Google Result</h5>
      <div className="card #263238 blue-grey darken-4">
        <div class="card-image">
              <img src={image}/>
            </div>
        <div className="card-content white-text">
          <span className="card-title">
            {title}
          </span>
          <p>
            {url}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
