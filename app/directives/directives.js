'use strict';

/**
*  DIRECTIVES
*/
angular.module('MyComponents', [])
  .directive('selectAllOnFocus', function() {
		return	{
			restrict: 'A',
			link: function(scope, element) {
				element.mouseup(function(event) {
					event.preventDefault();
        });
				element.focus(function(){
					element.select();
				})

			}
		}
	})

	.directive('defaultButton', function() {
		return {
			restrict: 'E',
			transclude: true,
			template: "<button class='btn btn-primary' ng-click='cta()' ng-transclude></button>"
		}
	})
	.directive('contactCard', function() {
		return {
			restrict: 'E',
			scope: {
				friend: '='
			},
			templateUrl: 'partials/directives/friend-detail.html',
			controller: function($scope) {
				console.log($scope.friend);
			}
		}
	})
