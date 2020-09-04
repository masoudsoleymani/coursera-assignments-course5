(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
  var service = this;

  service.getAllCategories = function () {
    var url = "https://davids-restaurant.herokuapp.com/categories.json";
    return $http({method: "GET", url: url})
    .then(function (response) {
      var categories = response.data;
      return categories;
    })
    .catch(function (error) {
      console.log("Unable to connect to the server");
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
    return $http({method: "GET", url: url})
    .then(function (response) {
      var menu_items = response.data.menu_items;
      return menu_items;
    })
    .catch (function (error) {
      console.log("Unable to connect to the server");
    });
  }
}

})();
