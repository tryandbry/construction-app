import React from 'react';
import { connect } from 'react-redux';

//import { selectTrades } from '../../store/estimate';

class sidebar extends React.Component {
  constructor(props){
    super();
    this.state = {
      selectedTrades: props.selectedTrades,
    };
  }

  render(){

    return (
      <div id='sidebar'>
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
    );
  }
}

const mapState = (state) => ({
  //trades: state.estimate.trades,
  selectedTrades: state.estimate.selectedTrades,
});

export default connect(mapState)(sidebar);
