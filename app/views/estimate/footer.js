import React from 'react';
import { connect } from 'react-redux';

export default class footer extends React.Component {
  render() {

    return (
      <div id="estimateFooter" className="row">
        <div className="col-4 footer-left">
          <button
            className="btn btn-outline-primary"
          >Previous
          </button>
        </div>
        <div className="col-4 footer-middle">
          <button
            className="btn btn-outline-primary"
          >Home
          </button>
        </div>
        <div className="col-4 footer-right">
          <button
            className="btn btn-outline-primary"
          >Next
          </button>
        </div>
      </div>
    );
  }
}
