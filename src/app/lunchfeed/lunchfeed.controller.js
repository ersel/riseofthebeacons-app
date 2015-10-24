(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LunchFeedController', LunchFeedController);

  /** @ngInject */
  function LunchFeedController($timeout, webDevTec, toastr, $scope) {
      $scope.value = 70;
      $scope.max = 100
      $scope.people=[{name:'Janie',time:'05 October 2011 14:48 UTC'},
                    {name:'Hege',time:'05 October 2011 14:48 UTC'},
                    {name:'Kai',time:'05 October 2011 14:48 UTC'},
                    {name:'Tom',time:'05 October 2011 14:48 UTC'},
                    {name:'Dave',time:'05 October 2011 14:48 UTC'},
                    {name:'Bob',time:'05 October 2011 14:48 UTC'},
                    {name:'Tony',time:'05 October 2011 14:48 UTC'},
                    {name:'Maria',time:'05 October 2011 14:48 UTC'},
                    {name:'Abdul',time:'05 October 2011 14:48 UTC'},
                    {name:'Gregory',time:'05 October 2011 14:48 UTC'},
                    {name:'Jameel',time:'05 October 2011 14:48 UTC'},
                    {name:'Ersel',time:'05 October 2011 14:48 UTC'},
                    {name:'Spyros',time:'05 October 2011 14:48 UTC'}]

      if ($scope.value < 80) {
        $scope.type = 'success';
      } else {
        $scope.type = 'danger';
      }
  };

})();
