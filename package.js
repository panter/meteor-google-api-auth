Package.describe({
  name: 'panter:google-api-auth',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'create an jwt auth client for google apis',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-google-api-auth',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('1.8.1')
  api.use('ecmascript')
  api.mainModule('google-api-auth.js', ['server'])
})
