import React from 'react';
import { connect } from 'react-redux';
import { homePage, prevPage, nextPage } from '../../store/estimate';

class sidebarNav extends React.Component {
  render() {
    let disableLeft = this.props.currentIndex > 0
      ? false : true;
    let disableRight =
      this.props.currentIndex < this.props.flow.length - 1
      ? false : true;

    return (
      <div>
        <button
          className="btn btn-outline-primary btn-block"
          disabled={disableLeft}
          onClick={this.props.prevPage}
        >Previous
        </button>
        <button
          className="btn btn-outline-primary btn-block"
          onClick={this.props.homePage}
        >Home
        </button>
        <button
          className="btn btn-outline-primary btn-block"
          disabled={disableRight}
          onClick={this.props.nextPage}
        >Next
        </button>
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

export default connect(mapState,mapDispatch)(sidebarNav)

