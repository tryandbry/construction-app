import React from 'react';
import { connect } from 'react-redux';

import { selectTrades } from '../../store/estimate';

class select extends React.Component {
  constructor(props){
    super();
    this.state = {
      selectedTrades: props.selectedTrades,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let arr = Array.prototype.slice.call(event.target.options);
    let selectedTrades = arr.reduce( (collection,option) => {
      if(option.selected) collection.push(option.text);
      return collection;
    },[]);
    this.setState({selectedTrades},() =>
      this.props.selectTrades(this.state.selectedTrades)
    );
  }

  render(){

    return (
      <div id='estimateSelect' className="row">
        <div className="col-12">
          <h2>New Estimate</h2>
          <h3>What trades should be included?</h3>
        </div>
        <div className="form-group col-6">
          <select multiple
            className="form-control"
            onChange={this.handleChange}
            value={this.state.selectedTrades}
            id="estimateTrades">
            {this.props.trades.map( (trade) => 
              <option
                key={'estimateTrades'+trade}
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
            <tbody>
              {this.state.selectedTrades.map( (trade) =>
              <tr key={'selected'+trade}>
                <td>{trade}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  trades: state.estimate.trades,
  selectedTrades: state.estimate.selectedTrades,
});

const mapDispatch = {
  selectTrades,
};

export default connect(mapState,mapDispatch)(select);
