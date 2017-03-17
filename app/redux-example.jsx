var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type){
    case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    }
    default:
      return state;
  }
}

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state, {
            id: nextHobbyId++,
            hobby: action.hobby
          }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)

    default:
      return state;
  }
}

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
          ...state, {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
    case 'REMOVE_MOVIE':
        return state.filter((movie) => movie.id !== action.id)

    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('State is', state);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kat'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'painting'
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'John'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Memento',
  genre: 'Thriller'
})

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Mad Max',
  genre: 'Action'
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})
