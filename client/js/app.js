'use strict';

/* App Module */

var exerciseApp = angular.module('exerciseApp', [
    'ngRoute',     
    'exerciseControllers',
    'ngResource',
    'ngCookies',
    'ngAnimate'

]);


exerciseApp.config(['$provide', '$routeProvider', '$locationProvider',
    function ($provide, $routeProvider, $locationProvider) {
        $provide.value("startTime", new Date());
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'MainCtrl'
                }).when('/exercise1', {
                    templateUrl: 'partials/exercise1.html',
                    controller: 'Exercise1Ctrl'
                }).when('/e2', {
                    templateUrl: 'partials/weather.html',
                    controller: 'WeatherCtrl'
                }).when('/e24', {
                    templateUrl: 'partials/movie.html',
                    controller: 'MovieCtrl'
                }).when('/e22', {
                    templateUrl: 'partials/london.html',
                    controller: 'LondonCtrl'
                }).when('/e23', {
                    templateUrl: 'partials/shawn.html',
                    controller: 'Exercise2Ctrl'
                }).when('/e25', {
                    templateUrl: 'partials/grocery.html',
                    controller: 'GroceryCtrl'
                }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(false).hashPrefix('!');

    }])
    .run(function ($rootScope, startTime){
        $rootScope.endPoint = 'http://api.openweathermap.org/data/2.5/weather?'
        startTime.setTime((new Date()).getTime());
  });;


exerciseApp.controller('AnimationCtrl', function($scope) {
    $scope.anImgClass = 'begin-class';
});
exerciseApp.animation('.fadeOut', function() {
    return {
        enter : function(element, parentElement, afterElement, doneCallback) {},
        leave : function(element, doneCallback) {},
        move : function(element, parentElement, afterElement, doneCallback) {},
        addClass : function(element, className, done) {
            jQuery(element).animate({opacity: 0}, 3000);
        },
        removeClass : function(element, className, done) {
            jQuery(element).animate({opacity: 1}, 3000);
        }
    };
});
