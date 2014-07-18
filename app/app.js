'use strict';

/* App Module - Place app dependencies inside array */
var app = angular.module('templates', [
			'ui.router',
			'ui.bootstrap',
			'MyComponents',
			'firebase'
		]) 
/* Configuration of ui-router to inject views into ui-view element in index.html */
		.config(function ($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('/', {
					url : '/',
					templateUrl : 'partials/login.html',
					controller : 'loginCtrl'
				})
				.state('home', {
					url : '/home',
					templateUrl: 'partials/home.html'

				})
				.state('contact', {
					url : '/contact',
					templateUrl: 'partials/contact.html'

				})
				.state('list', {
					url : '/list',
					templateUrl: 'partials/list.html',
					controller: 'listCtrl'

				})
				.state('list.item', {
					url : '/:item', /* NOTE: ng knows to append item param to list url */
					templateUrl: 'partials/list.item.html',
					controller: function ($scope, $stateParams) {
						$scope.item = $stateParams.item;
					}
				})
				.state('toggle', {
					url : '/toggle',
					templateUrl: 'partials/toggle.html',
					controller:	function toggleImage($scope){
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
					}
				})
				.state('todo', {
					url: '/todo',
					templateUrl: 'partials/todo.html',
					controller: 'TodoCtrl'
				})
				.state('firebase', {
					url: '/firebase',
					templateUrl: 'partials/firebase.html',
					controller: 'firebaseCtrl'
				})
				.state('storage', {
					url: '/storage',
					templateUrl: 'partials/storage.html',
					controller: 'MaintCtrl'
				})
				.state('/css', {
					url : '/css',
					templateUrl : 'partials/changeCSS.html',
					controller : 'cssCtrl'
				})
		})

/* CONTROLLERS */
/* -------------------------------------------------------------------------- CSS ctrl example ---- */
		.controller('cssCtrl', function($scope){
			/* itemList is bound to the list view via scope */
			$scope.changeColor = function(color) {
					$scope.color = color;
					sessionStorage.setItem(color,color);
					alert(color + " saved");
			}

		})



/* -------------------------------------------------------------------------- List ctrl example ---- */
		.controller('listCtrl', function($scope){
			/* itemList is bound to the list view via scope */
			$scope.itemList = [
				{name: "French"},
				{name: "Guitar"},
				{name: "Jog"},
				{name: "Wine"},
				{name: "Angular"},

			];
		})
/* -------------------------------------------------------------- Login ctrl example ---------------- */	
		.controller('loginCtrl', function($scope){ 
			$scope.login = function(){
				if($scope.loginForm.$valid) {
					console.log('sending request....');
				}
			};

		})
/* -------------------------------------------------------------- Limited text area ctrl example ---- */		
		/* Text area with limit to be implemented */
		.controller('TextAreaWithLimitCtrl', function($scope){
			$scope.remaining = function () {
			return MAX_LEN - $scope.message.length;
			};
		})

/* -------------------------------------------------------------- Storage ctrl example -------------- */
		.controller("MaintCtrl", function($scope, LS) {
		  $scope.greeting = "Local storage demo app";
		  $scope.value = LS.getData();
		  $scope.latestData = function() {
		    return LS.getData();
		  };
		  this.update = function(val) {
		    return LS.setData(val);
		  };
		})

		.factory("LS", function($window, $rootScope) {
			
		  angular.element($window).on('storage', function(event) {
		    if (event.key === 'my-storage') {
		      $rootScope.$apply();
		    }
		  });
		  return {
		    setData: function(val) {
		    	console.log("hello2");
		      $window.localStorage && $window.localStorage.setItem('my-storage', val);
		      return this;
		    },
		    getData: function() {
		    	// console.log("hello");
		      return $window.localStorage && $window.localStorage.getItem('my-storage');
		    }
		  };
		});


/* ------------------------------------------------------------------------- Todos ctrl example ---- */
		function TodoCtrl($scope,$http) {
		 	$http.get('js/TodoList.json').success(function(data){
			$scope.todos = data;
			})

			$scope.addTodo = function() {
		    	$scope.todos.push({text:$scope.todoText, done:false});
		    	$scope.todoText = '';
		  	};
		 
		 
	  		$scope.remaining = function() {
		    	var count = 0;
		    	angular.forEach($scope.todos, function(todo) {
		      		count += todo.done ? 0 : 1;
		    	});
		    	return count;
	  		};
	  		$scope.removeTodo = function(index) {
	  			$scope.todos.splice('index', 1);
	  		};
	 
	  		$scope.archive = function() {
		    var oldTodos = $scope.todos;
		    $scope.todos = [];
		    angular.forEach(oldTodos, function(todo) {
		      if (!todo.done) $scope.todos.push(todo);
		    });
		};
	}

/* -------------------------------------------------------------------- Playlist ctrl example ------- */
		/* Prototype for dynamic interactive audio playlist 
		- To be implemented */	
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

/* ------------------------------------------------------------------- Population ctrl example ------ */
		/* To be implemented */
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

/* -------------------------------------------------------------------- Greeting ctrl example ------- */
		/* To be implemented */
		var addRemoveGreetingCtrl = function ($scope) {
			$scope.name = "";
			$scope.$watch("name", function(newValue, oldValue){
				if ($scope.name.length > 0) {
					$scope.text = "Greetings " + $scope.name;
				} else 
					$scope.text = "";
			});
		} 

/* -------------------------------------------------------------------- Voting ctrl example --------- */
		/* Alternative syntax for controller function 
		- To be implemented */
		function incrementDecrementValue($scope){ 
			$scope.value = 1;
				$scope.incrementValue = function(value) { 
					$scope.value += 1;
				}
				$scope.resetValue = function() {
					$scope.value = 1;
					//console.log('reset'); //debugging in console
				}
				$scope.decrementValue = function(value) {
					$scope.value -= 1;

				}
		}

/* ---------------------------------------------------------------------- Firebase ctrl example ---- */
		function firebaseCtrl($scope, $firebase) { 
			var ref = new Firebase("https://sb1m27fx608.firebaseio-demo.com/");
			$scope.messages = $firebase(ref);
		}



	
		




		
		
	