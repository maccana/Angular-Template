angular.module('hello', []) 
		.controller('HelloCtrl', function($scope){
			$scope.name = 'Angular'; 
		})
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