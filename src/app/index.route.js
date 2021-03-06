(function() {
  'use strict';

  angular
    .module('hackMcr')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('carousel', {
        url: '/carousel',
        templateUrl: 'app/carousel/carousel.html',
        controller: 'CarouselController',
        controllerAs: 'carousel'
      })
      .state('leaderboard', {
        url: '/leaderboard',
        templateUrl: 'app/leaderboard/leaderboard.html',
        controller: 'LeaderboardController',
        controllerAs: 'leaderboard'
      })
      .state('lunchfeed', {
        url: '/lunchfeed',
        templateUrl: 'app/lunchfeed/lunchfeed.html',
        controller: 'LunchFeedController',
        controllerAs: 'lunchfeed'
      })
      .state('twitterfeed', {
        url: '/twitterfeed',
        templateUrl: 'app/twitterfeed/twitterfeed.html',
        controller: 'TwitterFeedController',
        controllerAs: 'twitterfeed'
      })
      .state('barchart', {
        url: '/barchart',
        templateUrl: 'app/barchart/barchart.html',
        controller: 'BarChartController',
        controllerAs: 'barchart'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
