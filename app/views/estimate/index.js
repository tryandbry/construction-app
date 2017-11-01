import React from 'react';
import { connect } from 'react-redux';

import EstimateSelect from './select';
import EstimateDemolition from './demolition';
import Footer from './footer';

class estimate extends React.Component {

  render(){
    const pages = [
      <EstimateSelect />,
      <EstimateDemolition />,
    ];
    const formState = this.props.estimate.formState;

    return (
      <div id='estimate' className="container">
        {pages[formState]}
        <Footer />
      </div>
    );
  }
}

const mapState = (state) => state;

export default connect(mapState)(estimate);
