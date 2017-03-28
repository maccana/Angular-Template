(function() {

  "use strict";

  /* Currency Ctrl */
  angular.module('templates')
    .controller('CurrencyCtrl', function($scope, $http) {
      var vm = this;
      vm.products = [];
      $http.get('js/data/store-products.json').success(function(data){
        vm.products = data;
      });
    });
})();
