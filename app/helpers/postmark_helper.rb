module PostmarkHelper
  def deliver_with_postmark_template(**options)
    #Email will be sent only on production or staging
    if Rails.env.production? || Rails.env.staging?
      status = postmark_client.deliver_with_template(options)
      Rails.logger.error "Postmark Error##{status[:error_code]}: #{status[:message]}" unless status[:message].downcase == 'ok'
    else
      puts 'Email will be sent only production or staging environment'
      puts JSON.pretty_generate(options)
    end
  end

  def postmark_client
    Postmark::ApiClient.new('d887150d-bdce-4809-b0b9-d2a1243e74c6')
  end

end
