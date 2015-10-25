(function() {
  'use strict';

  angular.module("hackMcr").controller("BarChartController", function ($scope) {
      $scope.names = ['Bob', 'Tony', 'Greg', 'Lucy', 'Peppa', 'Alicia', 'Rick'];

      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40]
      ];
    });

  /** @ngInject */
  function BarChartController() {
  }
})();
