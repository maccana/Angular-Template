var app = angular.module('templates', []) 

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

		/* alternative syntax for controller function */
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

	
		function toggleImage($scope){
			$scope.visible = true; 
			$scope.toggle = function() {
				btn = document.getElementById('toggle-btn');
					if(btn.innerHTML == 'Show Image') {
						btn.innerHTML = 'Hide Image';

					} 
					else 
						btn.innerHTML = 'Show Image';
						$scope.visible = !$scope.visible;

			}
		}
		
		app.directive("myWidget",function(){
			var linkFunction = function(scope, element, attributes) {
		
				var paragraph = element.children()[0];
				$(paragraph).on("click", function() {

					$(this).css({ "background-color": "red" });
				});
			};
			return {
				restrict: "E",
				link: linkFunction
				
			};


		});



		
		
	