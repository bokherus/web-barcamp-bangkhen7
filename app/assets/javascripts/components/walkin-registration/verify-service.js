let service = {
  checkin: (code, successCallback, failCallback) => {
    $.ajax({
      type: 'POST',
      url: '/admin/registration',
      data: { code: code }
    })
    .success((res) => {
      successCallback();
      console.log(res);
    })
    .fail((err) => {
      failCallback();
      console.log(err);
    });
  }
};

export default service;
