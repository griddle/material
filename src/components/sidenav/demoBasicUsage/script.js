
angular.module('sidenavDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.data;

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
                      .then(function(){
                          $log.debug("toggle left is done");
                      });
  };

  var elToFocus = angular.element(document.getElementById('focusInput'));

  $scope.toggleRight = function() {

    $mdSidenav('right').toggle()
                        .then(function(){
                          elToFocus.focus();
                          $log.debug("toggle RIGHT is done");
                        });
  };
})

.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
                      .then(function(){
                        $log.debug("close LEFT is done");
                      });

  };
})

.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('right').close()
                        .then(function(){
                          $log.debug("close RIGHT is done");
                        });
  };
});
