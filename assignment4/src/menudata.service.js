(function () {
  'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


//MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService() {
  var service = this;

  service.getAllCategories = function() {
    var items = [
      {
        id: 81,
        short_name: "L",
        name: "Lunch",
        special_instructions: "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
        url: "https://davids-restaurant.herokuapp.com/categories/81.json"
      },
      {
        id: 82,
        short_name: "A",
        name: "Soup",
        special_instructions: "",
        url: "https://davids-restaurant.herokuapp.com/categories/82.json"
      },
      {
        id: 83,
        short_name: "B",
        name: "Appetizers",
        special_instructions: "",
        url: "https://davids-restaurant.herokuapp.com/categories/83.json"
      }
    ]
    return items;
    // ajax to https://davids-restaurant.herokuapp.com/categories.json
    //see MenuSearchService for assignment 3
  }

  service.getItemsForCategory = function(categoryShortName) {
    // ajax to  https://davids-restaurant.herokuapp.com/menu_items.json?category=categoryShortName
    //see MenuSearchService for assignment 3
    var x = {
      'menu_items' : [
        {
          id: 1069,
          short_name: "L1",
          name: "Orange Chicken",
          description: "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
          price_small: null,
          price_large: 9.75,
          small_portion_name: null,
          large_portion_name: null
        },
        {
          id: 1070,
          short_name: "L2",
          name: "General Tso's Chicken",
          description: "chunks of chicken, breaded and deep-fried with sauce and scallions; white meat by request: for pint $1 extra, for large $2 extra",
          price_small: null,
          price_large: 9.75,
          small_portion_name: null,
          large_portion_name: null
        },
        {
          id: 1071,
          short_name: "L3",
          name: "Chicken Cashewnuts",
          description: "diced chicken with waterchestnuts, green peppers, and celery, and cashewnuts; white meat by request: for pint $1 extra, for large $2 extra",
          price_small: null,
          price_large: 9.75,
          small_portion_name: null,
          large_portion_name: null
        }
      ],
      category: {
        short_name: "L",
        name: "Lunch",
        special_instructions: "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll."
      }
    }
    return x;
  }
}

})();
