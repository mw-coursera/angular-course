(function () {
  'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.narrowItems = function (searchTerm) {
    if (undefined === searchTerm || searchTerm.length === 0) {
      // no need to do a lookup
      ctrl.foundItems = [];
      ctrl.error = "Nothing found, search term was empty";
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        if (response.length > 0) {
          ctrl.foundItems = response;
          ctrl.error = null;
        } else {
          ctrl.foundItems = [];
          ctrl.error = "Nothing found";
        }
      })
      .catch(function (error) {
        ctrl.error = "Something went wrong";
        ctrl.foundItems = [];
      })
    }
  };

  ctrl.removeItem = function(index) {
    var remaining = MenuSearchService.removeItem(index);
    if (remaining === 0) {
      ctrl.error = "Nothing left, search again";
    }
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    service.searchTerm = searchTerm.toLowerCase();
    service.matchedItems = [];

    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result) {
      var items = result.data.menu_items;
      // only keep those that match the searchTerm
      for (var i = 0; i < items.length; i++) {
        var description = items[i].description.toLowerCase();
        if (description.indexOf(service.searchTerm) !== -1) {
          service.matchedItems.push(items[i]);
        }
      }
      return service.matchedItems;
    });
    return response;
  };

  service.removeItem = function(index) {
    service.matchedItems.splice(index, 1);
    return service.matchedItems.length;
  }
}

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    scope: {
      foundItems: '<',
      error: '<' ,
      onRemove: '&'
    },
    templateUrl : "foundItems.html"
  }

  return ddo;
}

})();
