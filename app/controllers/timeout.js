/* Timeout Ctrl */
(function() {

  'use strict';

  function TimeoutController($scope, $timeout) {
    $scope.message = "Wait for the message to turn to a greetng in 3 seconds!";
      $timeout(function () {
          $scope.message = "Hey, thanks for hanging around to see this awesome $timeout service!";
      }, 3000);
  }
  angular.module('templates').controller('TimeoutCtrl', TimeoutController);
})();
