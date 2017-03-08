'use strict';

/* HTTP Ctrl */

templates.controller('ShowHideCtrl', function($scope, $http) {
  // $scope.msg = 'show hide ctrl connected'; debugging

  $scope.showMe = function(){
   $scope.show=true;
  }
  $scope.hideMe = function(){
   $scope.show=false;
  }

})
