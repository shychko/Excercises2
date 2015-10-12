'use strict';


exerciseApp.factory('myFactory', function($http) {
   return {
     getJSONFile: function(callback) {
       $http.get('/assets/london.json').success(callback);
     }
   }
});



angular.module('exerciseApp')
    .service('UtilsService',
    function() {
        var service = this;

        service.setMsg = function() {
            this.message = "Long live the leaders!!! 3-12 is great!!!";
            this.newMsg = "Be here now!";
        };
    }
);


angular.module('exerciseApp')
    .service('ExerciseModel', function () {
    var test = this;

    test.getMovies = function() {

        this.films = [
            {
                title: 'Goldfinger',
                actor: 'Sean Connery'
            },
            {
                title: 'Moonraker',
                actor: 'Roger Moore'
            },
            {
                title: 'Skyfall',
                actor: 'Daniel Craig'
            }
        ];
        return this.films;
    };
});



angular.module('exerciseApp')
    .service('VersionService', function(){
        this.version = "2.2";
    });



