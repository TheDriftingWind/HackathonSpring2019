var app = angular.module("app", ["ngRoute","ngResource"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/home",{
      controller: "LoginCtrl",
      templateUrl: "app/partials/mainLogin.html"
  })
  .when('/', {redirectTo: "/home"})
  //.otherwise({redirectTo: "/login"});

})
