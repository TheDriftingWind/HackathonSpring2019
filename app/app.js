var app = angular.module("app", ["ngRoute","ngResource"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/home",{
      controller: "homeCtrl",
      templateUrl: "app/partials/home.html"
  })
  .when("/early",{
    templateUrl: "app/partials/theBeginning.html"
  })
  .when("/renaissance",{
    templateUrl: "app/partials/theRenaissance.html"
  })
  .when("/baroque",{
    templateUrl: "app/partials/baroque.html"
  })
  .when("/classical",{
    templateUrl: "app/partials/classical.html"
  })
  .when("/romantic",{
    templateUrl: "app/partials/romantic.html"
  })
  .when("/twenty",{
    templateUrl: "app/partials/twenty.html"
  })
  .when("/twentyFirst",{
    controller: "twentyFirstCtrl",
    templateUrl: "app/partials/twentyFirst.html"
  })
  .when('/', {redirectTo: "/home"})
  .otherwise({redirectTo: "/home"});

})
