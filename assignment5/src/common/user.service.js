(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['ApiPath'];
function UserService(ApiPath) {
  var service = this;

  service.saveUser = function(userObject, menuItem) {
    service.user = userObject;
    service.user.favoriteItem = {
      'imageUrl' : ApiPath + '/images/' + menuItem.short_name + ".jpg",
      'name' : menuItem.name,
      'description' : menuItem.description
    };
    console.log("Saved this in UserService: ", service.user);
  }

  service.getUser = function() {
    return service.user;
  }

}
})();
