(function () {
  'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


//MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService() {
  var service = this;

  service.getAllCategories = function() {
    // ajax to https://davids-restaurant.herokuapp.com/categories.json
    //see MenuSearchService for assignment 3
  }

  service.getItemsForCategory = function(categoryShortName) {
    // ajax to  https://davids-restaurant.herokuapp.com/menu_items.json?category=categoryShortName
    //see MenuSearchService for assignment 3

  }
}

})();
