import React from 'react';
import { connect } from 'react-redux';

const sidebar = (props) =>
  <div id='sidebar'>
    <table className="table">
      <thead>
        <tr>
          <th>Selected Trades</th>
        </tr>
      </thead>
      <tbody>
        {props.selectedTrades.map( (trade) =>
        <tr key={'selected'+trade}>
          <td>{trade}</td>
        </tr>
        )}
      </tbody>
    </table>
  </div>

const mapState = ({estimate}) => ({
  selectedTrades: estimate.selectedTrades,
});

export default connect(mapState)(sidebar);
