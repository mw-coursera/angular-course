(function(){
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService']
  function SignupController(MenuService) {
    var $ctrl = this;
    $ctrl.showForm = true;

    $ctrl.submit = function() {
      console.log("Form submit: ", $ctrl.user);
      var short_name = $ctrl.user.menuitem;
      MenuService.getMenuItem(short_name).then(function (result) {
        console.log("Found this menu item: ", result);
        $ctrl.showForm = false;
      }).catch(function (error) {
        $ctrl.menuError = "No such menu number exists: " + short_name;
        console.log("menu Error: ", $ctrl.menuError);
      })
    }
  }
})()
