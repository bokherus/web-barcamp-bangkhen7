var vm = function(state, action) {
  switch(action.type) {
    case 'init':
      return {
        user: null,
        loginToggle: false
      };
    case 'update_user':
      return _.merge(state, {
        user: action.data.user
      });
    default:
      return state;
  }
};

export default vm;
