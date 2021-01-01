/*global angular*/
var minApp = angular.module('minApp', [
    'ngRoute',
    'minaControllers'
]);

minApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/randomizer', {
            templateUrl: 'partials/randomizer.html',
            controller: 'RandomizerController'
        }).
        when('/tvshows', {
            templateUrl: 'partials/tvshows.html',
            controller: 'TvShowsController'

        }).
        when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        }).
        when('/details', {
            templateUrl: 'partials/details.html',
            controller: 'DetailsController'
        }).
        otherwise({
            templateUrl: 'partials/randomizer.html',
            controller: 'RandomizerController'
        });
}]);
