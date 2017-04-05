(function() {

  "use strict";

  /* Voting Ctrl */
  angular.module('templates')
    .controller('VoteCtrl', function() {

      var vm = this;
      vm.value = 0;

      vm.incrementValue = function(value) {
        vm.value += 1;
      }

      vm.resetValue = function() {
        vm.value = 0;
        //console.log('reset'); //debugging in console
      }
      
      vm.decrementValue = function(value) {
        vm.value -= 1;
      }

    });

})();
