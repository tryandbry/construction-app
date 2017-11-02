import React from 'react';
import { connect } from 'react-redux';

import { setTaskQty } from '../../store/demolition';

class demolition extends React.Component {
  constructor() {
    super();
    this.state = {
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e,task) {
    console.log('handleInput event: ',e);
  }

  render() {

    return (
      <div id="estimateDemolition" className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Description of Work</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Unit Price</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.map( (task) =>
              <tr>
                <td>Item</td>
                <td>Description of Work</td>
                <td>Quantity</td>
                <td>Unit</td>
                <td>Unit Price</td>
                <td>Cost</td>
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
  tasks: state.demolition.tasks,
});

const mapDispatch = {
  setTaskQty,
}

export default connect(mapState,mapDispatch)(demolition);


const demoInput = (task,value,handleInput) => 
  <input
    value={value}
    onChange={(e,task) => handleInput(e,task)}
  </input>
