// VERBS
const NEXT = 'NEXT';
const PREV = 'PREV';
const SELECT_TRADES = 'SELECT_TRADES';

const initState = {
  formState: 0,
  formMin: 0,
  formMax: 5,
  selectedTrades: [
    'Demolition',
    'Painting',
    'Flooring',
  ],
  trades: [
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
  ],
};

export default (state=initState,action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
    case SELECT_TRADES:
      newState.selectedTrades = action.trades;
      break;
    case PREV:
      state.formState == state.formMin ?
        newState.formState = 5 :
        newState.formState -= 1;
      break;
    case NEXT:
      state.formState == state.formMax ?
        newState.formState = 0 :
        newState.formState += 1;
      break;
    default:
      return state;
  }
  return newState;
}

// ACTION CREATORS
const actionNextPage = () =>({ type: NEXT });
const actionPrevPage = () =>({ type: PREV });
const actionSelectTrades = (trades) =>({
  type: SELECT_TRADES,
  trades,
});

// DISPATCHERS
export const nextPage = () =>
  dispatch => dispatch(actionNextPage());

export const prevPage = () =>
  dispatch => dispatch(actionPrevPage());

export const selectTrades = (trades) =>
  dispatch => dispatch(actionSelectTrades(trades));

