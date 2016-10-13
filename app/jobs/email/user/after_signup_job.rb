class Email::User::AfterSignupJob < Email::BaseJob
  def template_model(user)
    template_id = 985781
    template_model = {
      name: user.full_name,
      code: user.code
    }
    {
      from: 'sponsor@barcampbangkhen.org',
      to: user.email,
      template_id: template_id,
      template_model: template_model.as_json
    }
  end
end
