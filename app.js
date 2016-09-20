(function () {
'use strict';

var myApp = angular.module('myApp', []);
myApp.controller('LunchCaculatorController',
function ($scope) {
  $scope.lunchItems = null;
  $scope.message = null;
  $scope.totalValue = 0;

  $scope.doSomething = function () {
    if($scope.lunchItems == null || $scope.lunchItems.length < 1) {
      $scope.message = "Please enter data first!";
    }
    else {
          var items =$scope.lunchItems.split(",");
          if(items.length < 4) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
          $scope.lunchItems = null;
      }
}
});


})();
