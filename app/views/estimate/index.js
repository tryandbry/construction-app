import React from 'react';
import { connect } from 'react-redux';

import EstimateSelect from './select';

class estimate extends React.Component {

  render(){
    console.log("estimate component props: ",this.props);

    const pages = [<EstimateSelect />];
    const formState = this.props.estimate.formState;
    console.log("formState: ",formState);

    return (
      <div id='estimate' className="container">
        <h3>Estimate component</h3>
        {pages[formState]}
      </div>
    );
  }
}

const mapState = (state) => state;

export default connect(mapState)(estimate);
