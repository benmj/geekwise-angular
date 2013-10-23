// app.js - file

var myApp = angular.module('myApp', [])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/main.html',
			controller: 'MainController'
		})
		.when('/list', {
			templateUrl: 'templates/list.html',
			controller: 'ListController'
		})
		.otherwise({
			redirectTo: '/'
		});
	});

myApp.controller('MainController', function ($scope) {
	$scope.world = "everybody!";
});

myApp.controller('ListController', function ($scope) {
	$scope.list = [
		'bananas',
		'eggs',
		'bread',
		'beer'
	];
});