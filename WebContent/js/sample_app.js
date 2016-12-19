/**
 * @SampleApp
 */

var sampleApp = angular.module("sampleApp", ["ngRoute"]);
	sampleApp.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "templates/app.html"
	    })
	    .when("/ngBind", {
	        templateUrl : "templates/ng-bind.html"
	    })
	    .when("/ngRepeat", {
	        templateUrl : "templates/ng-repeat.html",
	        controller : "HelloController"
	    })
	    .when("/ngController", {
	        templateUrl : "templates/ng-controller.html",
	        controller : "HelloController"
	    })
	    .when("/pageNotFound",{
	    	templateUrl : "templates/404.html"
	    })
	    .otherwise({
	    	redirectTo : "/pageNotFound"
	    })
	});

	sampleApp.controller('HelloController',function($scope){
		$scope.person = {
				name : "Abhishek",
				country : "India"
		}
		$scope.fruits = ["Apple","Orange","Grapes"];
		
	});