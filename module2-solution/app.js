(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.itemsArray = ShoppingListCheckOffService.getItemsToBuy();
  toBuy.buyItem = function(itemName,quantity){
    ShoppingListCheckOffService.buyItem(itemName, quantity);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.itemsArray = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var tobuyItems = [
    {name: "Pants", quantity: "2"},
    {name: "T-shirt", quantity: "4"},
    {name: "Per-of-Socks", quantity: "6"},
    {name: "Shoes", quantity: "3"},
    {name: "Hat", quantity: "1"}
  ];
  var boughtItems = [];

  service.buyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
    service.removeItem(item);
  };

  service.removeItem = function (item) {
    var boughtItemIndex = tobuyItems.map(function(item1) { 
      return item1.name; }).indexOf(item.name);
    if( boughtItemIndex != -1)
    {
        tobuyItems.splice(boughtItemIndex, 1);
    }
  };

  service.getItemsToBuy = function () {
    return tobuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();