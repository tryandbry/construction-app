import React from 'react';
import { connect } from 'react-redux';
import { prevPage, nextPage } from '../../store/estimate';

class footer extends React.Component {
  render() {
    console.log('Footer: ',this.props);

    let disableLeft = this.props.formState > this.props.formMin
      ? false : true;
    let disableRight = this.props.formState < this.props.formMax
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
  formState: state.estimate.formState,
  formMin: state.estimate.formMin,
  formMax: state.estimate.formMax,
});

const mapDispatch = {
  prevPage,
  nextPage,
};

export default connect(mapState,mapDispatch)(footer)
