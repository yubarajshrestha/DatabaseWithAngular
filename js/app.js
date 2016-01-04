angular.module('app', ['ngRoute', 'controller'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html'
	})
	.when('/blog', {
		templateUrl: 'templates/blog.html',
		controller: 'BlogCtrl'
	})
	.otherwise({
		templateUrl: 'templates/404.html'
	})
})