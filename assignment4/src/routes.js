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
      templateUrl: 'src/templates/categories-main.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/templates/items-main.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
      // resolve: {
      //   items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
      //     return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      //   }]
      // }
    });
  }
})();
