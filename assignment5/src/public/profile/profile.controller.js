(function() {
  'use strict';

  angular.module('public')
  .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['user'];
  function ProfileController(user) {
    var ctrl = this;
    ctrl.user = user;
  }
})();
