angular.module('bootstrap-modal').controller('modalCtrl', function ($scope, userHelper) {
  $scope.deleteProfile = function () {
    userHelper.deleteProfile();
  }
});