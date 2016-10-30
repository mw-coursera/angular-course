(function(){
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserService']
  function SignupController(MenuService, UserService) {
    var $ctrl = this;
    $ctrl.showForm = true;

    $ctrl.submit = function() {
      var short_name = $ctrl.user.menuitem;
      MenuService.getMenuItem(short_name).then(function (result) {
        UserService.saveUser($ctrl.user, result);
        $ctrl.showForm = false;
        $ctrl.menuError = undefined;
      }).catch(function (error) {
        $ctrl.menuError = "No such menu number exists: " + short_name;
      })
    }
  }
})()
