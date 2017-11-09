// VERBS
const NEXT = 'NEXT';
const PREV = 'PREV';
const HOME = 'HOME';
const SELECT_TRADES = 'SELECT_TRADES';

const flowHead = ['select'];
const flowTail = ['review'];

const initState = {
  flow: flowHead.concat([
    'Demolition',
    'Painting',
    'Flooring',
    ...flowTail,
  ]),
  currentPage: 'select',
  currentIndex: 0,
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
      newState.flow = flowHead.concat([
        ...newState.selectedTrades,
        ...flowTail,
      ]);
      newState.currentPage = 'select';
      break;
    case HOME:
      newState.currentIndex = 0;
      newState.currentPage = 'select';
      break;
    case PREV:
      newState.currentIndex = state.currentIndex > 0 ?
        state.currentIndex - 1 :
        state.flow.length - 1;
      newState.currentPage = state.flow[newState.currentIndex];
      break;
    case NEXT:
      newState.currentIndex = state.currentIndex < state.flow.length - 1 ?
        state.currentIndex + 1 :
        0;
      newState.currentPage = state.flow[newState.currentIndex];
      break;
    default:
      return state;
  }
  return newState;
}

// ACTION CREATORS
const actionHomePage = () =>({ type: HOME });
const actionNextPage = () =>({ type: NEXT });
const actionPrevPage = () =>({ type: PREV });
const actionSelectTrades = (trades) =>({
  type: SELECT_TRADES,
  trades,
});

// DISPATCHERS
export const homePage = () =>
  dispatch => dispatch(actionHomePage());

export const nextPage = () =>
  dispatch => dispatch(actionNextPage());

export const prevPage = () =>
  dispatch => dispatch(actionPrevPage());

export const selectTrades = (trades) =>
  dispatch => dispatch(actionSelectTrades(trades));

