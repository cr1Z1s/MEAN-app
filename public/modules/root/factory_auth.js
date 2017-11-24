angular.module("app").factory('auth', function () {
  this.isAuth = false;
  return {
    isAuth: this.isAuth
  }
});