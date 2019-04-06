var app = angular.module("app", ["ngRoute","ngResource"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/home",{
      controller: "homeCtrl",
      templateUrl: "app/partials/home.html"
  })
  .when('/', {redirectTo: "/home"})
  //.otherwise({redirectTo: "/login"});

})
