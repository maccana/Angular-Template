
/*
*	 Controllers
*/

/* Color Tap Ctrl */

templates.controller('colorTapCtrl', function($scope) {
	$scope.colorTap = function(){
		var tapper = document.getElementById("tapper");
		var display = document.getElementById("print");
		var hexColor = '#'+hex()+hex()+hex();
		tapper.style.backgroundColor = hexColor;
		display.innerHTML = hexColor;

		function hex(){
			var hexchars = "0123456789abcedf";
			var hexval = Math.floor(16 * Math.random());
			//console.log(hexchars[hexval]);
			return (hexchars[hexval]);
		}
	}
})


/* Toggle Image Ctrl */

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

/* Calculator Ctrl */

templates.controller('CalculatorCtrl', function($scope, CalculatorService) {

    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }

    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
})

/* CSS Ctrl */

templates.controller('cssCtrl', function($scope){
	/* css style passed from input field in partial */
	$scope.changeCSS = function(style) {
			/* binding to value inside ng-class on the scope */
			$scope.style = style;
			sessionStorage.setItem(color,color);
			alert(color + " saved");
	}
})

/* List Ctrl */

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


/* Storage Ctrl */

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



/* Limited text area Ctrl */

/* Text area with limit to be implemented */
function TextAreaWithLimit($scope){
	var MAX_LEN = 140;
	$scope.remaining = function () {
	return MAX_LEN - $scope.message.length;
	};
}

/* Playlist Ctrl */

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

/* Population Ctrl */

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

/* Greeting Ctrl */

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

/* Voting Ctrl */

/* Alternative syntax for controller function
- To be implemented */
function voteCtrl($scope){
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
