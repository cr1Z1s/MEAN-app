angular.module('app').controller('navCtrl', function ($scope, auth, userHelper) {
  $scope.isLog = function () {
    if (auth.isAuth) {
      return true
    } else {
      return false
    }
  }

  $scope.logout = function () {
    userHelper.logout();
  }
});