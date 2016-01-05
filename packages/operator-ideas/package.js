Package.describe({
  summary: 'Tweaks for the internal Operator ideas web app.',
  version: '0.1.0',
  name: 'operator-ideas'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/callbacks.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/login_form.html',
    'lib/client/templates/login_form.js',
    'lib/client/stylesheets/styles.sass',
    'lib/client/custom_templates.js'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/config.js'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});