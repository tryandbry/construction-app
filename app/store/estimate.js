// VERBS
const NEXT = 'NEXT';
const PREV = 'PREV';
const SET_TRADES = 'SET_TRADES';

const initState = {
  formState: 0,
  formMin: 0,
  formMax: 5,
  trades: [
    'Demolition',
    'Painting',
    'Flooring',
  ],
};

export default (state=initState,action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
    case SET_TRADES:
      newState.trades = action.trades;
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
const actionSetTrades = (trades) =>({
  type: SET_TRADES,
  trades,
});

// DISPATCHERS
export const nextPage = () =>
  dispatch => dispatch(actionNextPage());

export const prevPage = () =>
  dispatch => dispatch(actionPrevPage());

export const setTrades = (trades) =>
  dispatch => dispatch(actionSetTrades(trades));

