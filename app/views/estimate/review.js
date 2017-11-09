import React from 'react';
import { connect } from 'react-redux';

import Trade from './trade';

const tradeToReducer = {
  'Demolition': 'demolition',
  'Coutertops & Cabinets': 'countertopsAndCabinets',
  'Finish Carpentry': 'finishCarpentry',
  'Windows & Doors': 'windowsAndDoors',
  'Insulation': 'insulation',
  'Framing': 'framing',
  'Drywall & Taping': 'drywallAndTaping',
  'Painting': 'painting',
  'Flooring': 'flooring',
  'Appliances': 'appliances',
  'HVAC': 'hvac',
  'Plumbing': 'plumbing',
  'Electrical': 'electrical',
};

class review extends React.Component {

  render() {
    console.log("Review props: ",this.props);

    return (
      <div id="estimateReview">
        <div className="row">
          <div className="col-12">
            <h2>Review</h2>
            <h3>Verify inputs</h3>
            {this.props.selectedTrades.map( (trade) =>
              <Trade
                key={'estimateReview'+trade}
                header={trade}
                tasks={this.props[tradeToReducer[trade]]}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  let obj = {
    selectedTrades: state.estimate.selectedTrades,
  };

  state.estimate.selectedTrades.forEach( (trade) => {
    let reducer = tradeToReducer[trade];
    obj[reducer] = state[reducer].tasks;
  });

  return obj;
}

export default connect(mapState)(review);
