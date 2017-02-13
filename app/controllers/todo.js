'use strict';

/* Todo Ctrl */

templates.controller('TodoCtrl', function($scope, $http) {

  $scope.pageTitle = 'Todo List App';

  // GET dummy JSON data with $http service
  $http.get('js/TodoList.json').success(function(data){
  $scope.todos = data;

  })

  // CREATE a todo
  $scope.addTodo = function() {
  	$scope.todos.push({text:$scope.todoText, done:false});
  	$scope.todoText = '';
  }

  // DELETE a todo
  $scope.removeTodo = function(todo) { /* passed todo as $index not working */
  	$scope.todos.splice($scope.todos.indexOf(todo),1);
  	console.log(todo.text + " has been removed from list.");
  }

  $scope.remaining = function() {
  	var count = 0;
  	angular.forEach($scope.todos, function(todo) {
   		count += todo.done ? 0 : 1;
  	})
  	return count;
  }

  $scope.archive = function() {
  	var oldTodos = $scope.todos;
  	$scope.todos = [];
  	angular.forEach(oldTodos, function(todo) {
   		if (!todo.done) $scope.todos.push(todo);
  	})
  }
 
})
