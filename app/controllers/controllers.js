
/* ===================================== CONTROLLERS ============================================*/

/* ----------------------------------------------------------------------- Toggle Image Ctrl */

templates.controller('toggleImageCtrl', function($scope) {

	$scope.visible = true; 
	$scope.toggle = function() {
		var btn = document.getElementById('toggle-btn');
		if(btn.innerHTML == 'Show Image') {
			btn.innerHTML = 'Hide Image';
		} 
		else 
			btn.innerHTML = 'Show Image';
			$scope.visible = !$scope.visible;
	}	
}) /* All controllers appended to the app module require a closing parentheses */

/* ------------------------------------------------------------------------- Calculator Ctrl */

templates.controller('CalculatorCtrl', function($scope, CalculatorService) {
	 
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }
 
    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
})

/* -------------------------------------------------------------------------------- CSS Ctrl */
	
templates.controller('cssCtrl', function($scope){
	/* css style passed from input field in partial */
	$scope.changeCSS = function(style) {
			/* binding to value inside ng-class on the scope */
			$scope.style = style;
			sessionStorage.setItem(color,color);
			alert(color + " saved");
	}
})	

/* ------------------------------------------------------------------------------- List Ctrl */
	
templates.controller('listCtrl', function($scope){
	/* itemList is bound to the list view via scope */
	$scope.itemList = [
		{name: "French"},
		{name: "Guitar"},
		{name: "Jog"},
		{name: "Wine"},
		{name: "Angular"},

	];
})
/* ----------------------------------------------------------------------------- Login Ctrl  */	

templates.controller('loginCtrl', function($scope){ 
	$scope.login = function(){
		if($scope.loginForm.$valid) {
			console.log('sending request....');
		}
	};
})

/* ---------------------------------------------------------------------------- Storage Ctrl */

// To be continued
// templates.controller("MaintCtrl", function($scope, LS) {
// 	$scope.greeting = "Local storage demo app";
// 	$scope.value = LS.getData();
// 	$scope.latestData = function() {
// 	return LS.getData();
// 	};
// 	this.update = function(val) {
// 	return LS.setData(val);
// 	};
// 	})

// 	.factory("LS", function($window, $rootScope) {

// 	angular.element($window).on('storage', function(event) {
// 	if (event.key === 'my-storage') {
// 	  $rootScope.$apply();
// 	}
// 	});
// 	return {
// 	setData: function(val) {
// 		console.log("hello2");
// 	  $window.localStorage && $window.localStorage.setItem('my-storage', val);
// 	  return this;
// 	},
// 	getData: function() {
// 		// console.log("hello");
// 	  return $window.localStorage && $window.localStorage.getItem('my-storage');
// 	}
// 	};
// });

/* --------------------------------------------------------------------------- Firebase Ctrl */
	
/* alternate controller structure */
function firebaseCtrl($scope, $firebase) { 
	var ref = new Firebase("https://sb1m27fx608.firebaseio-demo.com/");
	$scope.messages = $firebase(ref);
} /* Controller as a function not requiring closing parentheses */

/* ------------------------------------------------------------------------------ Todos Ctrl */
	
function TodoCtrl($scope,$http) {

 	$http.get('js/TodoList.json').success(function(data){
		$scope.todos = data;
	})

	$scope.addTodo = function() {
    	$scope.todos.push({text:$scope.todoText, done:false});
    	$scope.todoText = '';
  	}

	$scope.remaining = function() {
    	var count = 0;
    	angular.forEach($scope.todos, function(todo) {
      		count += todo.done ? 0 : 1;
    	})
    	return count;
	}

	$scope.removeTodo = function(todo) { /* passed todo as $index not working */
			$scope.todos.splice($scope.todos.indexOf(todo),1);
			console.log(todo.text + " has been removed from list.");
	}

	$scope.archive = function() {
    	var oldTodos = $scope.todos;
    	$scope.todos = [];
    	angular.forEach(oldTodos, function(todo) {
      		if (!todo.done) $scope.todos.push(todo);
    	})
	}
}

/* ------------------------------------------------------------------ Limited text area Ctrl */		

/* Text area with limit to be implemented */
function TextAreaWithLimit($scope){
	var MAX_LEN = 140;
	$scope.remaining = function () {
	return MAX_LEN - $scope.message.length;
	};
}

/* --------------------------------------------------------------------------- Playlist Ctrl */

/* To be implemented - Prototype for dynamic interactive audio playlist */	
var playlistCtrl = function($scope,$filter) {
	$scope.selectedAlbumSongs = [
		{'name': 'song1', 'url': 'http://test/song1.mp3' },
		{'name': 'song2', 'url': 'http://test/song2.mp3' },
		{'name': 'song3', 'url': 'http://test/song3.mp3' }

	];
	$scope.selectedSongs = function () {
		$scope.playList = $filter('filter')($scope.selectedAlbumSongs, {checked: true});
	}
}		

/* ------------------------------------------------------------------------- Population Ctrl */

/* To be implemented - display populations and percentage of world population */
var WorldCtrl = function ($scope) { 
	$scope.population = 7000; 
	$scope.countries = [
		{name: 'France', population: 63.1}, 
		{name: 'United Kingdom', population: 61.8},
		{name: 'Republic of Ireland', population: 4.8},
	]; 	

	$scope.worldsPercentage = function (countryPopulation) { 
		return Math.round((countryPopulation / $scope.population)* 100) / 100;
	}	
}

/* --------------------------------------------------------------------------- Greeting Ctrl */

/* To be implemented - dynamically add / remove greeting on page */
var addRemoveGreetingCtrl = function ($scope) {
	$scope.name = "";
	$scope.$watch("name", function(newValue, oldValue){
		if ($scope.name.length > 0) {
			$scope.text = "Greetings " + $scope.name;
		} else 
			$scope.text = "";
	});
} 

/* ----------------------------------------------------------------------------- Voting Ctrl */

/* Alternative syntax for controller function 
- To be implemented */
function voteCtrl($scope){ 
	$scope.value = 0;
	$scope.incrementValue = function(value) { 
		$scope.value += 1;
		console.log("You added one");
	}
	$scope.resetValue = function() {
		$scope.value = 1;
		//console.log('reset'); //debugging in console
	}
	$scope.decrementValue = function(value) {
		$scope.value -= 1;
	}
}





	




	
	
