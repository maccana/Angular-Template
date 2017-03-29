(function() {

  "use strict";

  /* Tabs Ctrl */
  angular.module('templates')
    .controller('TabsCtrl', function($scope, $http) {
      var vm = this;
      vm.tabs = [];
      // $http.get('js/data/store-products.json').success(function(data){
      //   vm.products = data;
      // });
    });
})();
