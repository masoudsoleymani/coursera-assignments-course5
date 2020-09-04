(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['$stateParams', 'items'];
function ItemListController($stateParams, items) {
  var itemList = this;
  itemList.items = items;
  itemList.selectedCategory = $stateParams.categoryId;
}

})();
