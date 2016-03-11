var app = angular.module('app', []);

app.controller('Ctrl1', function Ctrl1($scope, $http) {
	$http.get('js/items.json').success(function(data){
			$scope.todos = data;
			console.log(data);
			$scope.itemOrder = 'name';
	});

	$scope.addTodo = function () {
	 		console.log("Todo added");
	    	$scope.todos.push({task:$scope.formTodoText, done:false});
	    	$scope.formTodoText = '';
	 };

});
