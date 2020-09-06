(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userinfo','menuItem','ApiPath'];
function MyInfoController(userinfo,menuItem,ApiPath) {
  var myinfoCtrl = this;
    myinfoCtrl.userinfo = userinfo;
    myinfoCtrl.menuItem = menuItem ;
    myinfoCtrl.basePath = ApiPath ;
}
})();