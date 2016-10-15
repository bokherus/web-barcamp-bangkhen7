var Service = {
  login: function(data, callback) {
    var user = {};
    user.remember_me = 0;
    _.forEach(data, function(object) {
      user[object.name] = object.value;
    });
    $.ajax({
      type: 'POST',
      url: '/users/sign_in?authenticity_token=' + user.authenticity_token,
      data: user
    }).success(function(success) {
      // console.log("success");
      if(typeof callback === "function") { callback(success); }
      // console.log(success);
    }).fail(function(err) {
      // console.log("error");
      // console.log(err);
    });
  },
  getUser: function(callback) {
    $.ajax({
      type: 'GET',
      url: '/users'
    }).success(function(success){
      callback(success);
    }).fail(function(err) {
      // console.log(err);
      callback(err);
    });
  },
  signup: function(data, callback, token) {
    var user = {
      user: {}
    };
    _.forEach(data, function(object) {
      user.user[object.name] = object.value;
    });
    user.interest = user.user.interest;
    console.log(user);
    $.ajax({
      type: 'POST',
      url: '/users?authenticity_token=' + token,
      data: user
    }).success(function(success) {
      // console.log("success");
      if(typeof callback === "function") { callback(success); }
      // console.log(success);
    }).fail(function(err) {
      // console.log("error");
      // console.log(err);
    });
  }
};

export default Service;
