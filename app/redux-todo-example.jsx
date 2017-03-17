var redux = require('redux');

console.log('starting redux todo example');

// Reducer. HAs a default state & returns a state regardless of what action is.
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  return state;
};

var store = redux.createStore(reducer);

console.log('Current state: ', store.getState());
