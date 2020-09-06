(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['AccountService','MenuService'];
function RegistrationController(AccountService,MenuService) {
  var reg = this;
    reg.submit = function () {
      var response = MenuService.getMenuItemForShortName(reg.user.menunumber);
      response.then(function success(response) {
        reg.menuItemerror = "";
        reg.completed = true;
        AccountService.registerUser(reg.user);
      }, function error(response) {
        reg.menuItemerror="No such menu number exists";
      });
    };
}
})();