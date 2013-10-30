'use strict';

angular.module('showHideApp')
.controller('MainCtrl', function ($scope) {
	$scope.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];

	$scope.visibility = true;

	$scope.effect = 'bounce';
	$scope.completeShowFn = function () {
		console.log('controller says: done showing');
	};

	$scope.completeHideFn = function () {
		console.log('controller says: done hiding');
	};
})
.directive('animatedShow', function () {
	return {
		scope: {
			animatedShow: '=',
			effect: '=',
			completeShow: '&',
			completeHide: '&',
		},
		link: function (scope, element, attrs) {
			scope.$watch('animatedShow', function(newVal, oldVal) {
				if (newVal) {
					element.show({
						effect: scope.effect,
						complete: scope.completeShow
					});
				} else {
					element.hide({
						effect: scope.effect,
						complete: scope.completeHide
					});
				}
			});
		}
	};
});