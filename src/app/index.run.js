(function() {
  'use strict';

  angular
    .module('hackMcr')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
