(function () {
  'use strict';
  angular
    .module('ejKubide', ['ui.router'])
    .run(initializeApp);

  function initializeApp($rootScope) {
    $rootScope.appTitle = 'Bandas del siglo XX';
  }
})();
