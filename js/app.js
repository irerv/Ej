angular.module('ejKubide', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'index.html',
        controller: 'mainController'
      })
      .state('foo', {
        parent: 'home',
        url: "foo",
        templateUrl: 'foo.html',
        //controller: 'fooController'
      })
      .state('bar', {
        parent: 'home',
        url: "bar",
        templateUrl: 'bar.html',
        controller: 'barController'
      })
      .state('therollingstones', {
        parent: 'home',
        url: "the-rolling-stones",
        templateUrl: 'theRollingStones.html',
        controller: 'theRollingStonesController'
      })
      .state('thebeatles', {
        parent: 'home',
        url: "the-beatles",
        templateUrl: 'theBeatles.html',
        controller: 'theBeatlesController'
      })
      .state('queen', {
        parent: 'home',
        url: "queen",
        templateUrl: 'queen.html',
        controller: 'queenController'
      })
  }])
  .controller("mainController", ["$scope", function ($scope, $stateProvider, $urlRouterProvider) {}])
