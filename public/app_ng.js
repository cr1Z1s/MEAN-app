// root module
angular.module('app', ['ui.router', 'user', 'bootstrap-modal']);
// user module
angular.module('user', ['angular-jwt']);
// bootstrap modal module
angular.module('bootstrap-modal', []);