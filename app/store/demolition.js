// VERBS
const SET_QTY = 'SET_QTY';

const taskObj = function (qty,unit,unitPrice,cost) {
  this.qty = qty;
  this.unit = unit;
  this.unitPrice = unitPrice;
  this.cost = cost;
}

const initState = {
  tasks: {
    'Demo Dumpters': new taskObj(0,'ea',275,0),
    'Demo Walls': new taskObj(0,'ea',275,0),
    'Demo Ceiling': new taskObj(0,'ea',275,0),
    'Demo Hardwood Floor': new taskObj(0,'ea',275,0),
    'Demo Carpet': new taskObj(0,'ea',275,0),
    'Demo Floor tile': new taskObj(0,'ea',275,0),
    'Demo Wall tile': new taskObj(0,'ea',275,0),
    'Remove cabinets': new taskObj(0,'ea',275,0),
    'Remove countertops': new taskObj(0,'ea',275,0),
    'Handling to dumpster (if applicable)': new taskObj(0,'ea',275,0),
    'Truck rental for haul away': new taskObj(0,'ea',275,0),
    'Plumbing demo in plumbing': new taskObj(0,'ea',275,0),
    'HVAC demo in HVAC': new taskObj(0,'ea',275,0),
    'Electrical demo in Electrical': new taskObj(0,'ea',275,0),
    'Remove 1/4 Round': new taskObj(0,'ea',275,0),
    'Protection of finishes': new taskObj(0,'ea',275,0),
    'CONTINGENCY': new taskObj(0,'ea',275,0),
  },
};

export default (state=initState,action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
    case SET_QTY:
      if(state.tasks[action.task]) {
        newState.tasks[action.task] = action.qty;
        break;
      }
      else {
        console.error('Demolition: Invalid task: ',action.task);
      }
    default:
      return state;
  }
  return newState;
}

// ACTION CREATORS
const actionSetTaskQty = (task,qty) =>({
  type: SET_QTY,
  task,
  qty,
});

// DISPATCHERS
export const setTaskQty = (task,qty) =>
  dispatch => dispatch(actionSetTaskQty(task,qty));

