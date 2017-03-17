'use strict';

/* Timeout Ctrl */

templates.controller('TimeoutCtrl', function($scope, $timeout) {
  $scope.message = "Wait for the message to turn to a greetng in 3 seconds!";
    $timeout(function () {
        $scope.message = "Hey, thanks for hanging around to see this awesome $timeout service!";
    }, 3000);
})
