angular.module('hello', []) 
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
						]; 	

			$scope.worldsPercentage = function (countryPopulation) { 
				return Math.round((countryPopulation / $scope.population)* 100) / 100;
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
		function incrementValue($scope){ 
			$scope.value = 1;
				$scope.incrementValue = function(value) { 
					$scope.value += 1;
				}
		}