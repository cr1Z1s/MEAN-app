angular.module('user').config(function($stateProvider, $qProvider) {
  function authenticate ($q, $window, auth) {
    if (auth.isAuth && $window.sessionStorage.token) {
      return $q.when();
    } else {
      return $q.reject();
    }
  }

  $qProvider.errorOnUnhandledRejections(false);
  var login = {
    name: 'login',
    url: '/login',
    templateUrl: 'modules/user/view_login.html',
    controller: 'userCtrl'
  }

  var register = {
    name: 'register',
    url: '/register',
    templateUrl: 'modules/user/view_register.html',
    controller: 'userCtrl'
  }

  var profile = {
    name: 'profile',
    url: '/profile',
    templateUrl: 'modules/user/view_profile.html',
    controller: 'userCtrl',
    resolve: {
      authenticate: authenticate
    }
  }

  var edit = {
    name: 'edit',
    url: '/edit',
    templateUrl: 'modules/user/view_edit.html',
    controller: 'userCtrl',
    resolve: {
      authenticate: authenticate
    }
  }

  $stateProvider.state(login);
  $stateProvider.state(register);
  $stateProvider.state(profile);
  $stateProvider.state(edit);
});