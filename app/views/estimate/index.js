import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './sidebar';
import EstimateSelect from './select';
import EstimateDemolition from './demolition';
import EstimateReview from './review';

const pages = {
  'select': <EstimateSelect />,
  'Demolition': <EstimateDemolition />,
  'review': <EstimateReview />,
};

class estimate extends React.Component {

  render(){

    return (
      <div id='estimate'>
        <header>
          <Header />
        </header>
        <main className="container container-custom">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9">
              {pages[this.props.currentPage]}
            </div>
          </div>
        </main>
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

const Header = () => 
  <div> 
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" href="#">Builder</span>
    </nav>
  </div>
