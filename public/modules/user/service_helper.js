angular.module('user').service('userHelper', function ($rootScope, $http, auth, $window, jwtHelper, $timeout) {

  this.getProfile = function () {
    if ($window.sessionStorage.token) {
      var token = $window.sessionStorage.token;
      var profile = jwtHelper.decodeToken(token);
      return profile
    } else {
      return false;
    }
  }
  this.login = function (info) {
    $http(info).then(function mySuccess(response) {
      auth.isAuth = true;
      $window.sessionStorage.token = response.data.message;
      // Modal control
      $rootScope.modalTitle = "Login";
      $rootScope.modalBody = "Welcome back! you are logged in.";
      $rootScope.modalLink = "home";
      $('#Modal').modal('show');

      console.log($window.sessionStorage.token);
    }, function myError(response) {
      $rootScope.modalTitle = "Error";
      $rootScope.modalBody = "Wrong user or password";
      $rootScope.modalLink = "dog";
      $('#Modal').modal('show');
    })
  }
  this.userCheck = function (username) {
    $http({
      method: "GET",
      url: "user/register/" + username
    }).then(function mySuccess(response) {
      if (response.data == null) {
        $rootScope.isUsername = false;
      } else {
        $rootScope.isUsername = true;
      }
    }, function myError(response) {
      console.log(response.statusText)
    });
  }
  this.register = function (info) {
    $http(info).then(function mySuccess(response) {
      // Modal control
      $rootScope.modalTitle = "Register";
      $rootScope.modalBody = "Welcome new user.";
      $rootScope.modalLink = "register";
      $('#Modal').modal('show');

      console.log($window.sessionStorage.token);
    }, function myError(response) {
      $rootScope.modalTitle = "Error";
      $rootScope.modalBody = "Please try again";
      $rootScope.modalLink = "dog";
      $('#Modal').modal('show');
    })
  }
  this.edit = function (info) {
    $http(info).then(function mySuccess(response) {
      auth.isAuth = false;
      delete $window.sessionStorage.token;
      // Modal control
      $rootScope.modalTitle = "Edit Profile";
      $rootScope.modalBody = "Success!";
      $rootScope.modalLink = "register";
      $('#Modal').modal('show');
    }, function myError(response) {
      $rootScope.modalTitle = "Error";
      $rootScope.modalBody = "Wrong user or password";
      $rootScope.modalLink = "dog";
      $('#Modal').modal('show');
    })
  }
  this.logout = function () {
    auth.isAuth = false;
    delete $window.sessionStorage.token;
    // Modal control
    $rootScope.modalTitle = "Logout";
    $rootScope.modalBody = "See you soon!";
    $rootScope.modalLink = "home";
    $('#Modal').modal('show');
  }
  this.areyousure = function () {
    // Modal control
    $rootScope.modalTitle = "Logout";
    $rootScope.modalBody = "Are you sure?";
    $rootScope.modalLink = "delete";
    $('#Modal').modal('show');
  }
  this.deleteProfile = function () {
    $http({
      method: "DELETE",
      url: "user/delete",
      headers: { "auth": $window.sessionStorage.token }
    }).then(function mySuccess(response) {
      auth.isAuth = false;
      delete $window.sessionStorage.token;
      $timeout(function(){
        $rootScope.modalTitle = "Delete Profile";
        $rootScope.modalBody = "Profile Deleted";
        $rootScope.modalLink = "home";
        $('#Modal').modal('show');
      }, 1000);
    }, function myError(response) {
      $rootScope.modalTitle = "Error";
      $rootScope.modalBody = "Wrong user or password";
      $rootScope.modalLink = "dog";
      $('#Modal').modal('show');
    })
  }
});