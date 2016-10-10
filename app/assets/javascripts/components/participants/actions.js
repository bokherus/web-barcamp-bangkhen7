import types from './constants.js';
var Action = {
  filtering: function(text) {
    return {
      type: types.FILTERING,
      data: text
    };
  }
};

export default Action;
