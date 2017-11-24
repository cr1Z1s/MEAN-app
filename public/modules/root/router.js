angular.module('app').config(function($stateProvider, $qProvider, $urlRouterProvider) {

  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/home');
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'modules/root/view_home.html'
  }

  $stateProvider.state(homeState);
});