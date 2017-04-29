(function(){

  'use strict';

  /* Image List Ctrl */

  function ListController($scope) {

     $scope.itemList = [
        {name: "French"},
        {name: "Guitar"},
        {name: "Jog"},
        {name: "Wine"},
        {name: "Angular"}
     ]
  }

  angular.module('templates')
  .controller('ListCtrl', ListController);
  
})();
