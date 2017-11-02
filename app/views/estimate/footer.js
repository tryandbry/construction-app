import React from 'react';
import { connect } from 'react-redux';
import { homePage, prevPage, nextPage } from '../../store/estimate';

class footer extends React.Component {
  render() {
    console.log('Footer: ',this.props);

    let disableLeft = this.props.currentIndex > 0
      ? false : true;
    let disableRight =
      this.props.currentIndex < this.props.flow.length - 1
      ? false : true;

    return (
      <div id="estimateFooter" className="row">
        <div className="col-4 footer-left">
          <button
            className="btn btn-outline-primary"
            disabled={disableLeft}
            onClick={this.props.prevPage}
          >Previous
          </button>
        </div>
        <div className="col-4 footer-middle">
          <button
            className="btn btn-outline-primary"
            onClick={this.props.homePage}
          >Home
          </button>
        </div>
        <div className="col-4 footer-right">
          <button
            className="btn btn-outline-primary"
            disabled={disableRight}
            onClick={this.props.nextPage}
          >Next
          </button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  flow: state.estimate.flow,
  currentIndex: state.estimate.currentIndex,
});

const mapDispatch = {
  homePage,
  prevPage,
  nextPage,
};

export default connect(mapState,mapDispatch)(footer)
