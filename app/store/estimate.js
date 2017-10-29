
const initState = {
  formState: -1,
};

export default (state=initState,action) => {
  const newState = Object.assign({},state);
  switch(action.type) {
    default:
      return state;
  }
  return newState;
}
