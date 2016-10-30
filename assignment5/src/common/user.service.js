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
      'description' : menuItem.description,
      'short_name' : menuItem.short_name
    };
  }

  service.getUser = function() {
    return service.user;
  }

}
})();
