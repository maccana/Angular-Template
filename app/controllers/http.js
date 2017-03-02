'use strict';

/* HTTP Ctrl */

templates.controller('HttpCtrl', function($scope, $http) {
  // $scope.msg = 'http ctrl connected'; debugging
  $http.get("partials/httpMsg.html")
    .then(function(response) {
        $scope.welcome = response.data;
  });

})
