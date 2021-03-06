'use strict';

module.exports = function(CredentialSvc, HttpSvc) {
  'ngInject';

  function basePath() {
    var creds = CredentialSvc.get()
    return [
      'config',
      creds.appId,
      'flows'
    ];
  }

  this.getAll = function(flow) {
    return HttpSvc.get(basePath().concat([flow, 'locales']))
  }

  this.get = function(flow, locale) {
    return HttpSvc.get(basePath().concat([flow, 'locales', locale]))
  }

  return this;
}
