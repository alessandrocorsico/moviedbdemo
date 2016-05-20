(function() {
  'use strict';

  angular
    .module('dbmoviedemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463665574431;
    vm.showToastr = showToastr;

    activate();

    function activate() {
     // getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getSearchbyValue(searchvalue){
      vm.awesomeThings = webDevTec.movie(searchvalue);
    }


     $scope.$watch('searchText', function (val) {
        
     webDevTec.asyncSearch(val).then((function(res){
      var response = res;
      vm.awesomeThings = response.results;
     }).bind(vm));
      
    })

  }
})();