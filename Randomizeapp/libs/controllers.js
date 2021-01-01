/*global angular*/
'use strict';
var minaControllers = angular.module("minaControllers", []);

minaControllers.controller('AppController', function AppController($scope, $http) {

});

minaControllers.controller('RandomizerController', function RandomizerController($scope, $http) {



});

minaControllers.controller('TvShowsController', function TvShowsController($scope, $routeParams, $http, $q) {
    var tvSerieArray = [];

    $scope.APIBASE = "https://api.themoviedb.org/3/";
    $scope.APIKEY = "1ac4950a6cedad3e3aa0b6aa3873f21a";

    var promise1 = $http({
        method: 'GET',
        url: $scope.APIBASE + 'discover/tv?sort_by=popularity.desc&page=1&api_key=' + $scope.APIKEY,
        cache: 'true'
    });
    var promise2 = $http({
        method: 'GET',
        url: $scope.APIBASE + 'discover/tv?sort_by=popularity.desc&page=2&api_key=' + $scope.APIKEY,
        cache: 'true'
    });
    var promise3 = $http({
        method: 'GET',
        url: $scope.APIBASE + 'discover/tv?sort_by=popularity.desc&page=3&api_key=' + $scope.APIKEY,
        cache: 'true'
    });
    var promise4 = $http({
        method: 'GET',
        url: $scope.APIBASE + 'discover/tv?sort_by=popularity.desc&page=4&api_key=' + $scope.APIKEY,
        cache: 'true'
    });
    var promise5 = $http({
        method: 'GET',
        url: $scope.APIBASE + 'discover/tv?sort_by=popularity.desc&page=5&api_key=' + $scope.APIKEY,
        cache: 'true'
    });

    $q.all([promise1, promise2, promise3, promise4, promise5]).then(function (data) {
        for (var i = 0; i < 5; i++) {

            for (var a = 0; a < data[i].data.results.length; a++) {

                tvSerieArray.push(data[i].data.results[a]);
            }
        }

        $scope.Randomize();
        $scope.retur_data = tvSerieArray;
    });
    $scope.Randomize = function () {
        tvSerieArray.sort(function () {
            return 0.5 - Math.random()
        });
        $scope.retur_data = tvSerieArray;
    }


});

minaControllers.controller('AboutController', function AboutController($scope, $http) {

});

minaControllers.controller('DetailsController', function DetailsController($scope, $http, $log, $routeParams) {
    console.log("HEJ");
    $scope.itemId = $routeParams.itemId;
    $http.get($scope.APIBASE + 'tv/' + $scope.itemId + '?api_key=' + $scope.APIKEY).then(function (response) {
        $scope.retur_tvDetails = response.data;
    });
});

/*mittNameSpace.controller("FirstpageController", function FirstpageController($scope, $http) {
            "use strict";


        });
*/
