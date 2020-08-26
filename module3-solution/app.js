(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);

function FoundItems(){
  var ddo = {
    templateUrl:'founditems.html',
    retrict:'E',
    scope:{
      list:'<items',
      onRemove:'&'
    },
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;
    menu.getMatchedMenuItems = function(){
      if(typeof menu.searchTerm == 'undefined' || menu.searchTerm.trim() == ""){
        menu.found = [];
      }
      else{
        var promise  = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
        promise.then(function(response){
          menu.found = response;
        }).catch(function(error){
        });
      }
    }
    menu.removeItem = function(itemIndex){
      menu.found.splice(itemIndex,1);
    }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    return  $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
        var reponseArray = response.data.menu_items;
        var foundItems = [];
        for (var i = 0; i < reponseArray.length; i++) {
          if(reponseArray[i].description.indexOf(searchTerm) != -1){
            foundItems.push(reponseArray[i]);
          }
        }
        return foundItems;
      },
      function(error){
        console.log(error);
    });
  }
}
})();