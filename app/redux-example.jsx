var redux = require('redux');

console.log('starting redux example');

// Reducer. HAs a default state & returns a state regardless of what action is.
var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('Current state: ', currentState);
