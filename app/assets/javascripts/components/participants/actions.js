import types from './constants.js';
var Action = {
  init: function(data) {
    return {
      type: types.INIT,
      data: data
    };
  },
  filtering: function(text) {
    return {
      type: types.FILTERING,
      data: text
    };
  }
};

export default Action;
