var redux = require('redux');

console.log('starting redux example');

// Reducer. HAs a default state & returns a state regardless of what action is.
var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kat'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'John'
})

console.log('Name should be Kat', store.getState());
