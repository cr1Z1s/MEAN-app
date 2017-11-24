angular.module('app').controller('rootCtrl', function ($scope, auth) {
  $scope.isLog = function () {
    if (auth.isAuth) {
      return true
    } else {
      return false
    }
  }
});