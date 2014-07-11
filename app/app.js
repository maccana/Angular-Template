'use strict';

/* App Module - Place app dependencies inside array */

angular.module('templates', [
			'ui.router',
			'ui.bootstrap',
			'MyComponents'
		]) 
		.config(function ($stateProvider, $urlRouterProvider){

			$stateProvider
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
					url : '/:item',
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
				})


		})

		.controller('listCtrl', function($scope){
			$scope.itemList = [
				{name: "French"},
				{name: "Guitar"},
				{name: "Jog"},
				{name: "Wine"},
				{name: "Angular"},

			];
		})

		/* Text area with limit to be implemented */
		.controller('TextAreaWithLimitCtrl', function($scope){
			$scope.remaining = function () {
			return MAX_LEN - $scope.message.length;
			};
		})

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

		/* Prototype for dynamic interactive audio playlist */		
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

		var addRemoveGreetingCtrl = function ($scope) {
			$scope.name = "";
			$scope.$watch("name", function(newValue, oldValue){
				if ($scope.name.length > 0) {
					$scope.text = "Greetings " + $scope.name;
				} else 
					$scope.text = "";
			});
		} 

		/* Alternative syntax for controller function */
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


	
		




		
		
	