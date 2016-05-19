(function() {
  'use strict';

  angular
    .module('dbmoviedemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
