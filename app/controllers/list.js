'use strict';

/* List Ctrl */

templates.controller('ListCtrl', function($scope) {
 $scope.msg = 'Select an image from the list to view it.';

 /* itemList is bound to the list view via scope */
 $scope.itemList = [
   {name: "French"},
   {name: "Guitar"},
   {name: "Jog"},
   {name: "Wine"},
   {name: "Angular"},

 ];
})
