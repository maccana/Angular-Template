(function() {

  "use strict";

  /* Filter Ctrl */
  angular.module('templates')
    .controller('FilterCtrl', function($scope) {
      // $scope.msg = 'filter ctrl connected'; // debugging

      $scope.friends = [
        { name: "Peter",   age: 20 },
        { name: "Pablo",   age: 55 },
        { name: "Linda",   age: 20 },
        { name: "Marta",   age: 37 },
        { name: "Othello", age: 20 },
        { name: "Markus",  age: 32 }
      ];
    })
})();
