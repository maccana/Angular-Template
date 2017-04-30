(function() {

  "use strict";

  /*  Dir1 Ctrl - contact-card */
  angular.module('templates')
    .controller('ContactCardCtrl', function($scope) {

      $scope.pageTitle = 'Example Directive - Contact Card';

      $scope.friends = [
       {
         id: 0,
         firstName: 'Will',
         lastName: 'Smith',
         age: '40',
         tweets: [
           { id: 0, text: 'Wow, that\'s decent uncle Phil!' },
           { id: 1, text: 'Aunt Viv just had another baby!'},
           { id: 2, text: 'I love Philly, but nothin\' beats the sunshine of LA'}
         ]
       },
       {
         id: 0,
         firstName: 'Carlton',
         lastName: 'Banks',
         age: '39',
         tweets: [
           { id: 0, text: 'I just scored tickets to the Michael Buble concert!' },
           { id: 1, text: 'Someday I\'ll be super rich. Oh wait I am super rich!'},
           { id: 2, text: 'I way could live in the ghetto. Could I have a butler?'}
         ]
       }

     ]
    });

 })();
