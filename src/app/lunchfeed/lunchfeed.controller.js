(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LunchFeedController', LunchFeedController);

  /** @ngInject */
  function LunchFeedController($timeout, webDevTec, toastr, $scope) {
      $scope.value = 70;
      $scope.max = 100
      $scope.names=['Jani','Hege','Kai']

      if ($scope.value < 80) {
        $scope.type = 'success';
      } else {
        $scope.type = 'danger';
      }
  };

})();
