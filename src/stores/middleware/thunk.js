const thunk = (store) => (next) => (action) => {
  //logic
  //console.log('store', store);
  //console.log('next', next);
  //console.log('action', action);
  if (typeof action === 'function') {
    console.log('function', next);
    action(store.dispatch, store.getState);
  } else {
    console.log('action', next);
    next(action);
  }
};

export default thunk;
