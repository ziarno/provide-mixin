Package.describe({
  name: 'ziarno:provide-mixin',
  version: '0.0.1',
  summary: 'A mixin for mdg:validated-method to add arguments to the run function',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('underscore');
  api.addFiles('provide-mixin.js');
  api.export('ProvideMixin');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ziarno:provide-mixin');
  api.addFiles('provide-mixin-tests.js');
});
