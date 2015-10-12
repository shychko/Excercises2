'use strict';

/* Controllers */

var exerciseControllers = angular.module('exerciseControllers', []);


exerciseControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = "This is the HOME View";
    }]);

exerciseControllers.controller('Exercise1Ctrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "This is the Exercise1 View";
    }]);


exerciseControllers.controller('WeatherCtrl', ['$scope', '$http', '$q', '$cookieStore', '$window',
    function WeatherCtrl($scope, $http, $q, $cookieStore, $window) {
        $scope.getByZip = function(id) {
        console.log(id);
        $scope.myvar = id;
            $scope.Math = window.Math;
    };

        $scope.zip = $cookieStore.get('myLastZip');
        $scope.message = "Using the $cookieStore Service your last used zip code was " + $scope.zip;
        $window.alert($scope.message);

    $scope.getWithZip = function(id){

        $cookieStore.put('myLastZip', id);
    	
    	var def = $q.defer();
	  	$http.get('http://api.openweathermap.org/data/2.5/weather?' + 'zip=' + id + ',us')
	  	.success(function(res){
	  		$scope.myData = res;
	  		console.log("stringify = " + JSON.stringify(res));
	  		console.log("angular to json = " + angular.toJson(res));
	  		def.resolve(res);
	  	})
	  	.error(function(err, status){
	  			def.reject("Failed to get forecast");
	  			console.log("error http");
	  	})
	  	return def.promise;

  	}

    }]);


exerciseControllers.controller('LondonCtrl', ['$scope', 'myFactory', '$window', 'startTime',  function($scope, myFactory, $window, startTime) {
  myFactory.getJSONFile(function(data) {
     $scope.myData = data;
      $scope.message = "London weather being produced by a factory." + " as of : " + startTime;
      $window.alert($scope.message);
  });
}]);


exerciseControllers.controller('TitleCtrl', function($scope) {
    $scope.titleBar = "partials/tiny.html";
});


exerciseControllers.controller('Exercise2Ctrl',
    function ($scope, UtilsService) {
        UtilsService.setMsg();
        $scope.message = UtilsService.message;
        $scope.newMsg = UtilsService.newMsg;

    });



exerciseControllers.controller('MovieCtrl',
    function($scope, ExerciseModel) {
        $scope.message = "This is the Movie View";
        $scope.films = ExerciseModel.getMovies();
    });


exerciseControllers.controller('VersionCtrl', function($scope, VersionService) {
    $scope.versions = VersionService.version;
})

exerciseControllers.controller('GroceryCtrl',
    function($scope, ExerciseModel) {
        $scope.message = "List of Sale Items for this week.";

    });