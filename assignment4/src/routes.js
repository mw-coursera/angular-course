(function () {
  'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // ui states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html'
    })
}
})();
