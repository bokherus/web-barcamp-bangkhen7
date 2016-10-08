class Email::BaseJob < ActiveJob::Base

  include PostmarkHelper

  queue_as :default

  def perform(options)
    deliver_with_postmark_template(**template_model(options))
  rescue => e
    Rails.logger.error "Unable to send email #{self.class}: #{e}"
  end

  def template_model(options)
    raise "#{self.class} needs to implement 'template_model'"
  end

end
