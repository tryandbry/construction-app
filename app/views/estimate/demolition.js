import React from 'react';
import { connect } from 'react-redux';

import { isNumeric, printPrice } from '../../helpers/estimate';
import { setTaskQty } from '../../store/demolition';

class demolition extends React.Component {
  constructor(props) {
    super();
    this.state = props.tasks;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(isNumeric(event.target.value)) {
      let newValue = this.state[event.target.name];
      newValue.qty = event.target.value;
      
      this.setState({[event.target.name]: newValue});
      this.props.setTaskQty(event.target.name,event.target.value);
    }
  }

  render() {
    const tasks = Object.keys(this.props.tasks);

    return (
      <div id="estimateDemolition" className="row">
        <div className="col-12">
          <h2>Demolition</h2>
          <h3>Enter estimate</h3>
        </div>
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
              {tasks.map( (task,i) => 
              <tr key={task}>
                <td>{i}</td>
                <td>{task}</td>
                <td><DemoInput
                  task={task}
                  value={this.state[task].qty}
                  handleChange={this.handleChange}
                /></td>
                <td>{this.state[task].unit}</td>
                <td>{printPrice(this.state[task].unitPrice)}</td>
                <td>{printPrice(this.state[task].cost)}</td>
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

const DemoInput = ({task,value,handleChange}) => {
  return (
    <input
      className="form-control"
      type="text"
      name={task}
      value={value}
      onChange={handleChange}
    />
  );
}
