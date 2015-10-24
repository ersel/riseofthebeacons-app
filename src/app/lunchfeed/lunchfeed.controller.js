(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LunchFeedController', LunchFeedController);

  /** @ngInject */
  function LunchFeedController($timeout, webDevTec, toastr, $scope) {
      var value = 75;
      var type;

      $scope.max = 100;

      if ($scope.value < 80) {
        type = 'success';
      } else {
        type = 'danger';
      }

    $scope.type = type;
    $scope.value = value;
  };

})();
