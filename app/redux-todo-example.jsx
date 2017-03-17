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
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

console.log('Current state: ', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Dog'
});

console.log('Current state: ', store.getState());
