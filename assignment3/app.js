(function () {
  'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  var searchTerm = ctrl.searchTerm;
  ctrl.found = [];

  ctrl.narrowItems = function(searchTerm) {
    console.log("searchTerm:", searchTerm);
    found = []; // call MenuSearchService(searchTerm)
  }
}

function MenuSearchService() {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    // return $http(...).then(function (result) {
    //   // process result and only keep items that match
    //   var foundItems...
    //
    //   // return processed items
    //   return foundItems;
    // });
  }
}

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl : "foundItems.html"
  }

  return ddo;
}

})();
