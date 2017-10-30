import React from 'react';
import { connect } from 'react-redux';

const trades = [
  'Demolition',
  'Coutertops & Cabinets',
  'Finish Carpentry',
  'Windows & Doors',
  'Insulation',
  'Framing',
  'Drywall & Taping',
  'Painting',
  'Flooring',
  'Appliances',
  'HVAC',
  'Plumbing',
  'Electrical',
];

class select extends React.Component {
  constructor(){
    super();
    this.state = {
      trades: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let arr = Array.prototype.slice.call(event.target.options);
    let trades = arr.reduce( (collection,option) => {
      if(option.selected) collection.push(option.text);
      return collection;
    },[]);
    console.log('handleChange: ',trades);
  }

  render(){
    return (
      <div id='estimateSelect'>
        <div className="row">
          <h2 className="col-12">New Estimate</h2>
          <h3 className="col-12">What trades should be included?</h3>
          <div className="form-group col-6">
            <label htmlFor="estimateTrades">Trades</label>
            <select multiple
              className="form-control"
              onChange={this.handleChange}
              id="estimateTrades">
              {trades.map( (trade) => 
                <option
                  key={trade}
                >{trade}</option>
              )}
            </select>
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Selected Trades</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => state;

export default connect(mapState)(select);
