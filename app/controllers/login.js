'use strict';

/* Login Ctrl */

templates.controller('LoginCtrl', function($scope) {
  // Debugging 
  console.log('login ctrl.....');

  $scope.pageTitle = 'Login Form Demo';

  $scope.login = function(){
   if($scope.loginForm.$valid) {
     console.log('sending request....');
   }
  };

})
