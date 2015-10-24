(function() {
  'use strict';

  angular
    .module('hackMcr')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('leaderboard', {
        url: '/leaderboard',
        templateUrl: 'app/leaderboard/leaderboard.html',
        controller: 'LeaderboardController',
        controllerAs: 'leaderboard'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
