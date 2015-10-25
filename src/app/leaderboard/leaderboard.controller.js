(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LeaderboardController', LeaderboardController);

  /** @ngInject */
  function LeaderboardController($timeout, webDevTec, toastr, $scope) {

    $scope.workspaces = [];
    $scope.workspaces.push({ name: 'Workspace 1' });

    var companies = ["American Express", "Barclays", "DueCourse", "Google", "Rise"];
    var noOfHours = [40, 36, 34, 28, 22];
    var bestEmployee = ["Andrei", "Spyros", "Anthony", "Bob", "Ersel"]

    //generate random rows
    $scope.workspaces.forEach(function (wk) {
      wk.rows = [];
      for (var i = 0; i < 5; i++) {
          wk.rows[i] = {  id: companies[i], name: noOfHours[i], workspace: bestEmployee[i] };
      }

      wk.tableOptions = {
          data: wk.rows,
          rowStyle: function (row, index) {
              return { classes: 'none' };
          },
          cache: false,
          height: 700,
          striped: false ,
          pagination: false,
          pageSize: 10,
          pageList: [5, 10, 25, 50, 100, 200],
          search: false,
          showColumns: false,
          showRefresh: false,
          minimumCountColumns: 2,
          clickToSelect: false,
          showToggle: false,
          maintainSelected: true,
          columns: [ {
              field: 'id',
              title: 'Company',
              align: 'center',
              valign: 'bottom',
              sortable: true
          }, {
              field: 'name',
              title: 'No. of Hours per Employee',
              align: 'center',
              valign: 'middle',
              sortable: true
          }, {
              field: 'workspace',
              title: 'Employee of the Week',
              align: 'left',
              valign: 'top',
              sortable: true
          }]
      };
    });

    $scope.changeCurrentWorkspace = function (wk) {
        $scope.currentWorkspace = wk;
    }

    $scope.changeCurrentWorkspace($scope.workspaces[0]);

    //Select the workspace in document ready event
    $(document).ready(function () {
      if(!$scope.$$phase) {
        $scope.changeCurrentWorkspace($scope.workspaces[0]);
        $scope.$apply();
      }

    });

  }
})();
