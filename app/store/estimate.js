// VERBS
const NEXT = 'NEXT';
const PREV = 'PREV';

const initState = {
  formState: 0,
  formMin: 0,
  formMax: 5,
};

export default (state=initState,action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
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

// DISPATCHERS
export const nextPage = () =>
  dispatch => dispatch(actionNextPage());

export const prevPage = () =>
  dispatch => dispatch(actionPrevPage());

