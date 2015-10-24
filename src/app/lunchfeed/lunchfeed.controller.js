(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LunchFeedController', LunchFeedController);

  /** @ngInject */
  function LunchFeedController($timeout, webDevTec, toastr, $scope, moment, _) {
      $scope.value = 70;
      $scope.max = 100
      $scope.people=[{name:'Janie',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Hege',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Kai',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Tom',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Dave',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Bob',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Tony',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Maria',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Abdul',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Gregory',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Jameel',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Ersel',time:'2015-10-16T16:30:48.000Z'},
                    {name:'Spyros',time:'2015-10-16T16:30:48.000Z'}]

      $scope.people = _.map($scope.people, function(person){ person.time =moment(person.time).fromNow(); return person; });


      if ($scope.value < 80) {
        $scope.type = 'success';
      } else {
        $scope.type = 'danger';
      }

  };

})();
