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
    'Demo Dumpsters': new taskObj("",'ea',275,0),
    'Demo Walls': new taskObj("",'lf',0.85,0),
    'Demo Ceiling': new taskObj("",'sf',1.15,0),
    'Demo Hardwood Floor': new taskObj("",'sf',1.75,0),
    'Demo Carpet': new taskObj("",'sf',0.75,0),
    'Demo Floor tile': new taskObj("",'sf',2.25,0),
    'Demo Wall tile': new taskObj("",'sf',2.25,0),
    'Remove cabinets': new taskObj("",'lf',20,0),
    'Remove countertops': new taskObj("",'sf',10,0),
    'Handling to dumpster (if applicable)': new taskObj("",'lf',100,0),
    'Truck rental for haul away': new taskObj("",'ea',150,0),
    'Plumbing demo in plumbing': new taskObj("",'','',0),
    'HVAC demo in HVAC': new taskObj("",'','',0),
    'Electrical demo in Electrical': new taskObj("",'','',0),
    'Remove 1/4 Round': new taskObj("",'lf',0.45,0),
    'Protection of finishes': new taskObj("",'ls',500,0),
    'CONTINGENCY': new taskObj("",'ls',112,0),
  },
};

export default (state=initState,action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
    case SET_QTY:
      if(state.tasks[action.task]) {
        const task = newState.tasks[action.task];
        task.qty = action.qty;
        task.cost = Number(task.qty) * task.unitPrice;
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

