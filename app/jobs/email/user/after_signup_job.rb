class Email::User::AfterSignupJob < Email::BaseJob
  def template_model(user)
    template_id = 985781 # TODO: Add a valid template id
    template_model = { password: user.encrypted_password }
    {
      from: 'sponsor@barcampbangkhen.org',
      to: user.email,
      template_id: template_id,
      template_model: template_model.as_json
    }
  end
end
