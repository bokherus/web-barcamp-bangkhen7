var vm = function(state, action) {
  switch(action.type) {
    case 'init':
      return {
        success: true
      };
    case 'update_response':
      return _.merge(state, {
        success: action.data.success,
        message: action.data.message
      });
    default:
      return state;
  }
};

export default vm;
