/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-bootstrap'           : {
      'importBootstrapCSS'  : true,
      'importBootstrapTheme': true,
      'importBootstrapFont' : true
    },
    'ember-cli-bootstrap-switch': {
      "importBootstrapCSS"      : true,
      "importBootstrapJS"       : true,
      "importBootstrapSwitchCSS": true,
      "importBootstrapSwitchJS" : true
    },
    LOG_TRANSITIONS_INTERNAL    : true,
    LOG_ACTIVE_GENERATION       : true,
    LOG_VIEW_LOOKUPS            : true,
    LOG_RESOLVER                : true,
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
// app.import('bower_components/bootstrap/dist/css/bootstrap.css');
// app.import('bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css');
  return app.toTree();
};