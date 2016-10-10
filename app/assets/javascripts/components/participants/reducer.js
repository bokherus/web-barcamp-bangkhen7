import types from './constants.js';

var initialState = {
  filtered: ""
};

var reducer = function(state, action) {
  state = typeof state !== 'undefined' ? state : initialState;
  var newState = _.clone(state);
  switch(action.type) {
    case types.FILTERING:
      newState.filtered = action.data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
