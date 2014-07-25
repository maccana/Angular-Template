'use strict';

/* App Module - Place app dependencies inside array */
var templates = angular.module('templates', [
		'ui.router',
		'ui.bootstrap',
		'MyComponents',
		'firebase',
		//'bzSlider'
		//'ngAnimate'
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
			.state('storage', {
				url: '/storage',
				templateUrl: 'partials/storage.html',
				controller: 'MaintCtrl'
			})
			.state('firebase', {
				url: '/firebase',
				templateUrl: 'partials/firebase.html',
				controller: 'firebaseCtrl'
			})
			.state('/css', {
				url : '/css',
				templateUrl : 'partials/changeCSS.html',
				controller : 'cssCtrl'
			})
			.state('/calculate', {
				url : '/calculate',
				templateUrl : 'partials/calc.html',
				controller : 'CalculatorCtrl'
			})

	})	/* END STATE PROVIDER ROUTES */											
