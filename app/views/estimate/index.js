import React from 'react';
import { connect } from 'react-redux';

class estimate extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    console.log("estimate component props: ",this.props);

    return (
      <div id='estimate'>
        <h3>Estimate component</h3>
      </div>
    );
  }
}

const mapState = (state) => state;

export default connect(mapState)(estimate);
