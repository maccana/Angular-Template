(function(){
  'use strict';

  /* Show/Hide Ctrl */

  function ShowHideController($scope) {
    // $scope.msg = 'show hide ctrl connected'; debugging

    $scope.showMe = function(){
     $scope.show=true;
    }
    $scope.hideMe = function(){
     $scope.show=false;
    }

  }
  angular.module('templates')
  .controller('ShowHideCtrl', ShowHideController);
})();
