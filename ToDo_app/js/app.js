var app = angular.module('app', []);

app.controller('Ctrl1', function Ctrl1($scope, $http) {
	$http.get('js/items.json').success(function(data){
			$scope.items = data;
			$scope.itemOrder = 'name';
		});
});