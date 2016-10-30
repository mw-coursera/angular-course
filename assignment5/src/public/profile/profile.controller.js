(function() {
  'use strict';

  angular.module('public')
  .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['UserService'];
  function ProfileController(UserService) {
    var ctrl = this;
    ctrl.user = UserService.getUser();
  }
})();
