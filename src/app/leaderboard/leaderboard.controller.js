(function() {
  'use strict';

  angular
    .module('hackMcr')
    .controller('LeaderboardController', LeaderboardController);

  /** @ngInject */
  function LeaderboardController($timeout, webDevTec, toastr, $scope) {

    $scope.workspaces = [];
    $scope.workspaces.push({ name: 'Workspace 1' });
    $scope.workspaces.push({ name: 'Workspace 2' });
    $scope.workspaces.push({ name: 'Workspace 3' });

    //generate random rows
    $scope.workspaces.forEach(function (wk) {
      wk.rows = [];
      for (var i = 0; i < 500; i++) {
          wk.rows[i] = { index: i, id: 'row ' + i, name: 'GOOG', workspace: wk.name };
      }

      wk.tableOptions = {
          data: wk.rows,
          rowStyle: function (row, index) {
              return { classes: 'none' };
          },
          cache: false,
          height: 400,
          striped: true,
          pagination: true,
          pageSize: 10,
          pageList: [5, 10, 25, 50, 100, 200],
          search: true,
          showColumns: true,
          showRefresh: false,
          minimumCountColumns: 2,
          clickToSelect: true,
          showToggle: true,
          maintainSelected: true,
          columns: [{
              field: 'state',
              checkbox: true
          }, {
              field: 'index',
              title: '#',
              align: 'right',
              valign: 'bottom',
              sortable: true
          }, {
              field: 'id',
              title: 'Item ID',
              align: 'center',
              valign: 'bottom',
              sortable: true
          }, {
              field: 'name',
              title: 'Item Name',
              align: 'center',
              valign: 'middle',
              sortable: true
          }, {
              field: 'workspace',
              title: 'Workspace',
              align: 'left',
              valign: 'top',
              sortable: true
          }]
      };
    });


    $scope.changeCurrentWorkspace = function (wk) {
        $scope.currentWorkspace = wk;
    }

    //Select the workspace in document ready event
    $(document).ready(function () {
      if(!$scope.$$phase) {
        $scope.changeCurrentWorkspace($scope.workspaces[0]);
        $scope.$apply();
      }

    });

  }
})();
