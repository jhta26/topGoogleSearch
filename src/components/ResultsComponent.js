import React, { Component } from "react";

var ResultsComponent = ({ results }) => {
  var realResults = results
    ? results
    : [
        {
          title: "title",
          URL: "url"
        }
      ];
  var title1 = realResults.title1;
  var url1 = "http://" + realResults.URL1;
  var image1 = realResults.image1;
  var metaTitle1 = realResults.metaTitle1;
  var snippet1 = realResults.snippet1;

  var title2 = realResults.title2;
  var url2 = "http://" + realResults.URL2;
  var image2 = realResults.image2;
  var metaTitle2 = realResults.metaTitle2;
  var snippet2 = realResults.snippet2;

  var title3 = realResults.title3;
  var url3 = "http://" + realResults.URL3;
  var image3 = realResults.image3;
  var metaTitle3 = realResults.metaTitle3;
  var snippet3 = realResults.snippet3;

  return (
    <div className="ResultsComponent row">
      <div className="col m4 animated fadeInLeft">
        <div className="col s12 m12">
          <div className="card blue">
            <div className="card-image">
              <img src={image1} />
            </div>
            <div className="card-content">
              <span className="card-title white-text">{title1}</span>

              <p className="white-text">{snippet1}</p>
            </div>
            <div className="card-action">
              <a href={url1}>Click Here</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col m4 animated fadeInUp">
        <div className="col s12 m12">
          <div className="card red">
            <div className="card-image">
              <img src={image2} />
            </div>
            <div className="card-content">
              <span className="card-title white-text">{title2}</span>

              <p className="white-text">{snippet2}</p>
            </div>
            <div className="card-action">
              <a href={url2}>Click Here</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col m4 animated fadeInRight">
        <div className="col s12 m12">
          <div className="card yellow darken-1">
            <div className="card-image">
              <img src={image3} />
            </div>
            <div className="card-content">
              <span className="card-title white-text">{title3}</span>

              <p className="white-text">{snippet3}</p>
            </div>
            <div className="card-action">
              <a href={url3}>Click Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
