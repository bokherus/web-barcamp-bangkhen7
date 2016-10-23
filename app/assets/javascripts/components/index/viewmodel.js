var vm = function(state, action) {
  switch(action.type) {
    case 'init':
      return {
        user: null,
        loginToggle: false,
        mobileToggle: false
      };
    case 'update_user':
      return _.merge(state, {
        user: action.data.user
      });
    case 'toggle_mobile_menu':
      return _.merge(state ,{
        mobileToggle: action.toggle
      });
    default:
      return state;
  }
};

export default vm;
