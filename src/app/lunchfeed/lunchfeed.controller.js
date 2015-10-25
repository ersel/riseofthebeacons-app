
(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LunchFeedController', LunchFeedController);

  /** @ngInject */
  function LunchFeedController($timeout, webDevTec, toastr, $scope, $http, moment, _) {
      $scope.peoples = [];
      $http({
        method: 'GET',
        url: 'http://52.17.63.240:8080/canteen/status'
      }).then(function(response) {
          $scope.data = response.data; //response.data;
          $scope.value = response.data.num;
          $scope.canteenpeople = response.data.recent;

                $scope.canteenpeople.forEach(function(value,key){
                    // Simple GET request example:

                    $http.get('http://52.17.63.240:8080/employee/id/' + value.employeeId)
                    .then(function(response2) {

                        var data = {name : response2.data.name, time : moment(value.time).fromNow()};

                        //console.log(data);
                        $scope.peoples.push(data);

                    }, function(response2) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                      });
                });
                console.log($scope.peoples);


        }, function errorCallback(response) {
            console.log(2);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });


      //$scope.value = $scope.data.num;
      $scope.max = 100
      /*
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
      */

      if ($scope.value < 80) {
        $scope.type = 'success';
      } else {
        $scope.type = 'danger';
      }

  };

})();
