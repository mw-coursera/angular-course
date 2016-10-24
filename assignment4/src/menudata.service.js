(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$q', '$http']
  function MenuDataService($q, $http) {
    var service = this;

    service.getAllCategories = function() {
      service.items = [];

      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function(result) {
        service.items = result.data;
        return service.items
      });
      return response;
    }

    service.getItemsForCategory = function(categoryShortName) {
      service.items = [];

      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
        params : {
          'category' : categoryShortName
        }
      }).then(function(result) {
        service.items = result.data.menu_items;
        return service.items
      });
      return response;
    }
  }

})();
