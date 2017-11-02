import React from 'react';
import { connect } from 'react-redux';

import EstimateSelect from './select';
import EstimateDemolition from './demolition';
import Footer from './footer';

const pages = {
  'select': <EstimateSelect />,
  'Demolition': <EstimateDemolition />,
};

class estimate extends React.Component {

  render(){

    return (
      <div id='estimate' className="container">
        {pages[this.props.currentPage]}
        <Footer />
      </div>
    );
  }
}

//const mapState = (state) => state;
const mapState = (state) => ({
  //flow: state.estimate.flow,
  currentPage: state.estimate.currentPage,
});

export default connect(mapState)(estimate);
