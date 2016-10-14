var Service = {
  resend : function(email, token) {
    $.ajax({
      type: 'POST',
      url: '/resend?authenticity_token=' + token,
      data: {email: email}
    });
  }
};

export default Service;
