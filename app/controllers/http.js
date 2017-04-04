(function() {

  'use strict';

  /* HTTP Ctrl */
  function HttpController($scope, $http) {
      $http.get("partials/httpMsg.html")
        .then(function(response) {
            $scope.welcome = response.data;
      });
  }
  angular.module('templates')
  .controller('HttpCtrl', HttpController);
})();
