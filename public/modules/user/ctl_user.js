angular.module('app').controller('userCtrl', function ($scope, userHelper) {

  var profile = userHelper.getProfile();
  if (profile != false) {
    $scope.editUsername = profile.username;
    $scope.editName = profile.name;
  }

  $scope.login = function () {
    var info = {
      method: "POST",
      url: "user/login",
      data: { "username": $scope.username, "password": $scope.password }
    }
    userHelper.login(info);
  }
  $scope.edit = function () {
    var info = {
      method: "PUT",
      url: "user/edit",
      data: { "username": $scope.editUsername,"name":$scope.editName, "password": $scope.password }
    }
    userHelper.edit(info);
    console.log("working");
  }
  $scope.register = function () {
    if ($scope.username && $scope.password) {
      var info = {
        method: "POST",
        url: "user/register",
        data: { "username": $scope.username, "name": $scope.name, "password": $scope.password }
      }
      userHelper.register(info);
    } else {
      return
    }
  }
  $scope.deleteProfile = function () {
    userHelper.areyousure();
  }
  $scope.pswdCheck = function () {
    if ($scope.password == $scope.password2) {
      $scope.match = true;
    } else {
      $scope.match = false;
    }
  }
  $scope.usernameCheck = function () {
    console.log($scope.username);
    userHelper.userCheck($scope.username);
  }

});