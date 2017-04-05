(function(){

	"use strict";

	/* App Module - Place app dependencies inside array */
	var templates = angular.module('templates', [
			'ui.router',
			'ui.bootstrap',
			'MyComponents',
			'firebase'

		])
		.config(function ($stateProvider, $urlRouterProvider, $locationProvider){

			$urlRouterProvider.otherwise('home');

			$stateProvider
				.state('login', {
					url : '/login',
					templateUrl : 'partials/login.html',
					controller : 'LoginCtrl'
				})
				.state('home', {
					url : '/home',
					templateUrl: 'partials/home.html'
				})
				.state('model', {
					url : '/model',
					templateUrl: 'partials/model.html',
					controller : 'modelCtrl'
				})
				.state('currency', {
					url : '/currency',
					templateUrl: 'partials/currency-filter.html',
					controller : 'CurrencyCtrl',
					controllerAs: 'vm'
				})
				.state('tabs', {
					url : '/tabs',
					templateUrl: 'partials/tabs.html',
					controller : 'TabsCtrl',
					controllerAs: 'vm'
				})
				.state('inline-edit', {
					url : '/inline-edit',
					templateUrl: 'partials/inlineEdit.html',
					controller: 'inlineEditCtrl'
				})
				.state('todo', {
					url : '/todo',
					templateUrl: 'partials/todo.html',
					controller: 'TodoCtrl'
				})
				.state('contact', {
					url : '/contact',
					templateUrl: 'partials/contact.html'
				})
				.state('list', {
					url : '/list',
					templateUrl: 'partials/list.html',
					controller: 'ListCtrl'
				})
				.state('list.item', { // Nested state - view template is embedded in parent
					url : '/:item', /* NOTE: ng knows to append item param to list url */
					templateUrl: 'partials/list.item.html',
					controller: function ($scope, $stateParams) {
						$scope.item = $stateParams.item;
					}
				})
				.state('toggle', {
					url : '/toggle',
					templateUrl: 'partials/toggle.html',
					controller: 'toggleImageCtrl'
				})
				.state('timeout', {
					url : '/timeout',
					templateUrl: 'partials/timeout.html',
					controller: 'TimeoutCtrl'
				})
				.state('show-hide', {
					url: '/show-hide',
					templateUrl: 'partials/show-hide.html',
					controller: 'ShowHideCtrl'
				})
				.state('storage', {
					url: '/storage',
					templateUrl: 'partials/storage.html',
					controller: 'MaintCtrl'
				})
				.state('filter', {
					url: '/filter',
					templateUrl: 'partials/filter.html',
					controller: 'FilterCtrl'
				})
				.state('firebase', {
					url: '/firebase',
					templateUrl: 'partials/firebase.html',
					controller: 'FirebaseCtrl'
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
				.state('/switch', {
					url : '/switch',
					templateUrl : 'partials/viewSwitch.html'
				})
				.state('/vote', {
					url : '/vote',
					templateUrl : 'partials/voting.html',
					controllerAs: 'vm',
					controller : 'VoteCtrl'
				})
				.state('/color', {
					url : '/color',
					templateUrl : 'partials/color-tap.html',
					controller : 'ColorCtrl'
				})
				.state('/contact-card', {
					url : '/contact-card',
					templateUrl : 'partials/contact-card.html',
					controller : 'ContactCardCtrl'
				})
				.state('/http', {
					url : '/http',
					templateUrl : 'partials/http.html',
					controller : 'HttpCtrl'
				})
				// use the HTML5 History API
	      // $locationProvider.html5Mode(true);

		})	/* END STATE PROVIDER ROUTES */

})();
