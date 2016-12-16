angular.module('ejKubide', ['ui.router', 'ngSanitize', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster', 'info.vietnamcode.nampnq.videogular.plugins.youtube'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'index.html',
        controller: 'mainController'
      })
      .state('h', {
        parent: "home",
        url: "/home",
        templateUrl: 'home.html',
      })
      .state('foo', {
        url: "/foo",
        templateUrl: 'foo.html',
        controller: 'fooController'
      })
      .state('bar', {
        url: "/bar",
        templateUrl: 'bar.html',
        controller: 'barController'
      })
      .state('therollingstones', {
        url: "/the-rolling-stones",
        templateUrl: 'theRollingStones.html',
        controller: 'theRollingStonesController'
      })
      .state('thebeatles', {
        url: "/the-beatles",
        templateUrl: 'theBeatles.html',
        controller: 'theBeatlesController'
      })
      .state('queen', {
        url: "/queen",
        templateUrl: 'queen.html',
        controller: 'queenController'
      })
  }])
  .controller("mainController", ["$scope", '$state', '$rootScope', function ($scope, $state, $rootScope) {
    $state.go('h');
  }])
  .controller("fooController", ["$scope", function ($scope) {}])
  .controller("barController", ["$scope", function ($scope) {}])
  .controller("theRollingStonesController", ["$scope", "$sce", function ($scope, $sce) {
    this.config = {
      sources: [{
        src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=8BuhJPRJIxo"),
        type: "video/mp4"
      }, {
        src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
        type: "video/webm"
      }, {
        src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
        type: "video/ogg"
      }],
      theme: "bower_components/videogular-themes-default/videogular.css"
    };
  }])
  .controller("theBeatlesController", ["$scope", "$sce", function ($scope, $sce) {
    this.config = {
      sources: [{
        src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=4ooP3XgCIYg"),
        type: "video/mp4"
      }, {
        src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
        type: "video/webm"
      }, {
        src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
        type: "video/ogg"
      }],
      theme: "bower_components/videogular-themes-default/videogular.css"
    };
  }])
  .controller("queenController", ["$scope", "$sce", function ($scope, $sce) {
    this.config = {
      sources: [{
        src: $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=HgzGwKwLmgM&list=PLeoBVKHKNsGriWnBb7u2FrwRC-izVytZg"),
        type: "video/mp4"
      }, {
        src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
        type: "video/webm"
      }, {
        src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
        type: "video/ogg"
      }],
      theme: "bower_components/videogular-themes-default/videogular.css"
    };
  }])
