require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WebBarcampBangkhen7
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.browserify_rails.use_browserifyinc = true
    config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 react stage-0 ] ] --extension='.jsx' --extension='.js.jsx' --c"
    config.active_job.queue_adapter = :delayed_job
  end
end
