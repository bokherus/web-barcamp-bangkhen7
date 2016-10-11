import types from './constants.js';

var initialState = {
  filtered: [],
  participants: []
};

var reducer = function(state, action) {
  state = typeof state !== 'undefined' ? state : initialState;
  var newState = _.clone(state);
  switch(action.type) {
    case types.INIT:
      newState.participants = action.data.participants;
      newState.filtered = action.data.participants;
      return newState;
    case types.FILTERING:
      newState.filtered = [];
      var filtered = filterParticipants(action.data, state.participants);
      newState.filtered = filtered;
      return newState;
    default:
      return state;
  }
};

var filterParticipants = function(filter, participants) {
  filter = _.lowerCase(filter);
  return _.filter(participants, function(object) {
    var interestStr = _.lowerCase(object.interest.toString());
    if (interestStr.indexOf(filter) >= 0) {
      return object;
    }
  });
};
export default reducer;
