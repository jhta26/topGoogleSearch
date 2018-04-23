import React from 'react';

export default function PageLayout(props) {
  return (
    <div className="PageLayout">
      {props.children[0]}
      <div className="col">
        <div className="col">
          <div className="row s12 m5 l5 center-align">
            {props.children[1]}
          </div>
          <div className="row container s12 m7 l7 center-align">
            {props.children[2]}
          </div>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        </div>
      </div>
    </div>
  );
}
