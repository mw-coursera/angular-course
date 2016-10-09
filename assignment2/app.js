(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.empty = function() {
      return toBuy.items.length === 0;
    };
    toBuy.checkoffItem = function(index) {
      ShoppingListCheckOffService.checkoffItem(index);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
    bought.empty = function() {
      return bought.items.length === 0;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = [
      { name: "Javascript books", quantity: 6 },
      { name: "HTML books", quantity: 2 },
      { name: "CSS books", quantity: 2 },
      { name: "AngularJS 1 books", quantity: 5},
      { name: "AngularJS 2 books", quantity: 4 }
    ];

    service.boughtList = [];

    service.getItemsToBuy = function() {
      return service.toBuyList;
    }

    service.getItemsAlreadyBought = function() {
      return service.boughtList;
    }

    service.checkoffItem = function(itemIndex) {
      // splice returns an array, so get the first one
      var item = service.toBuyList.splice(itemIndex,1)[0];
      service.boughtList.push(item);
    }
  }
})();
