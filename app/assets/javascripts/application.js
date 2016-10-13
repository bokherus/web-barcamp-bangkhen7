// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require lodash
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
require('./libs/uikit/js/uikit.min.js');
require('./libs/gmaps.js');
window.Service = {};
Service.authentication = require('./libs/login-service.js').default;
/* load js after the page has been loaded by turbolinks */
$(document).on('turbolinks:load', function () {
	require('./libs/uikit/js/components/sticky.js');
	require('./libs/uikit/js/components/parallax.min.js');
  require('./libs/anchor.js');
});
