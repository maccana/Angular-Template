/* HTTP Ctrl */
(function() {
  'use strict';
  function HttpController($scope, $http) {
      $http.get("partials/httpMsg.html")
        .then(function(response) {
            $scope.welcome = response.data;
      });
  }
  angular.module('templates')
  .controller('HttpCtrl', HttpController);
})();
