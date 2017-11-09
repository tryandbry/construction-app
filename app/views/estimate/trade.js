import React from 'react';

import { printPrice } from '../../helpers/estimate';

export default class trade extends React.Component {
  render() {
    console.log("Trade Component props: ",this.props);

    const header = this.props.header;
    let tasks = Object.keys(this.props.tasks);
    tasks = tasks.filter( (task) => this.props.tasks[task].qty );

    const subtotal = tasks.reduce( (sum,task) => sum + this.props.tasks[task].cost , 0);

    return (
      <div>
        <span className="trade-summary-title">{header}</span>
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
              <td>{this.props.tasks[task].qty}</td>
              <td>{this.props.tasks[task].unit}</td>
              <td>{printPrice(this.props.tasks[task].unitPrice)}</td>
              <td>{printPrice(this.props.tasks[task].cost)}</td>
            </tr>
            )}
            <tr>
              <th />
              <th />
              <th />
              <th colSpan="2">Subtotal</th>
              <th>{printPrice(subtotal)}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
