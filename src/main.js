var angular = require('angular');
require('angular-breadcrumb');
require('angular-drag-and-drop-lists')

angular.module(
  'capi-ui',
  [
    'ncy-angular-breadcrumb',
    'dndLists',
    require('angular-loading-bar'),
    require('angular-sanitize'),
    require('angular-ui-bootstrap'),
    require('angular-ui-router')
  ]
)

.config(function($stateProvider, $httpProvider) {
  $stateProvider
    // This is just a placeholder, probably do something with this in the
    // future.
    .state('auth', {
      url: '',
      templateUrl: '/public/partials/home.html',
      controller: function() {},
      ncyBreadcrumb: {
        label: 'Welcome'
      }
    })
    .state('flows', {
      url: '/flows',
      templateUrl: '/public/partials/flowList.html',
      controller: 'FlowListCtrl',
      ncyBreadcrumb: {
        label: 'Flows'
      }
    })
    .state('flowOverview', {
      url: '/flows/:flow',
      templateUrl: '/public/partials/flowOverview.html',
      controller: 'FlowOverviewCtrl',
      ncyBreadcrumb: {
        label: 'Flow Overview',
        parent: 'flows'
      }
    })
    .state('fieldOverview', {
      url: '/flows/:flow/fields/:field',
      templateUrl: '/public/partials/fieldOverview.html',
      controller: 'FieldOverviewCtrl',
      ncyBreadcrumb: {
        label: 'Field: {{fieldName}}',
        parent: 'flowOverview'
      }
    })
    .state('formOverview', {
      url: '/flows/:flow/forms/:form',
      templateUrl: '/public/partials/formOverview.html',
      controller: 'FormOverviewCtrl',
      ncyBreadcrumb: {
        label: 'Form: {{form}}',
        parent: 'flowOverview'
      }
    })
    .state('fieldOverveiwFromForm', {
      url: '/flows/:flow/forms/:form/fields/:field',
      templateUrl: '/public/partials/fieldOverview.html',
      controller: 'FieldOverviewCtrl',
      ncyBreadcrumb: {
        label: 'Field: {{fieldName}}',
        parent: 'formOverview'
      }
    })
    .state('translations', {
      url: '/flows/:flow/translations',
      templateUrl: '/public/partials/translations.html',
      controller: 'TranslationsCtrl',
      ncyBreadcrumb: {
        label: 'Translations',
        parent: 'flowOverview'
      }
    })
    .state('mailTemplateOverview', {
      url: '/flows/:flow/mailTemplates/:template',
      templateUrl: '/public/partials/mailTemplateOverview.html',
      controller: 'MailTemplateCtrl',
      ncyBreadcrumb: {
        label: 'Mail Template',
        parent: 'flowOverview'
      }
    })
    .state('addField', {
      url: '/flows/:flow/addField',
      templateUrl: '/public/partials/fieldOverview.html',
      controller: 'AddFieldCtrl',
      ncyBreadcrumb: {
        label: 'Add Field',
        parent: 'flowOverview'
      }
    })

  var commonPutAndPostHeaders = {
    'Content-Type': 'application/json'
  }
  $httpProvider.defaults.headers.post = commonPutAndPostHeaders
  $httpProvider.defaults.headers.put = commonPutAndPostHeaders
})

require('./services')
require('./controllers')
require('./directives')