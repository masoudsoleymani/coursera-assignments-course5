(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchCheckController.$inject = ['$scope']
function LunchController($scope) {

  $scope.countItems= function(items) { //Count number of the items from input textbox
    let count=0;
		if(items==="")
			return 0;
    if(items !== undefined){
		let array= items.split(',');
  	for (let i = 0; i < array.length; i++) {
		if(array[i].trim()!=="")
        count++;
  		}
    }
		return count;
	};

  $scope.displayMessage = function () { //Displaying the message to user
    let dishCount = $scope.countItems($scope.dishes);
    if(dishCount < 1){
      $scope.message = "Please enter data first";
      $scope.colorChange = {
           "color": "red"
      };
      $scope.borderChange = {
           "border-color": "red"
      };
    }
    else if(dishCount <= 3){
      $scope.message = "Enjoy";
      $scope.applyColor();
    }
    else {
      $scope.message = "Too much";
      $scope.applyColor();
    }
  };
  
  $scope.applyColor = function(){ //Applying proper color to the message and border around the textbox
    $scope.colorChange = {
         "color": "green"
    };
    $scope.borderChange = {
         "border-color": "green"
    };
  };
};

})();