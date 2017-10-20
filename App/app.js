
var app = angular.module('app',['ui.router']);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('fina',{
            url:'/fina',
            templateUrl: 'App/view/wlfinance.html',
            controller: 'finaController'
        }).state('bank',{
            url:'/bank',
            templateUrl: 'App/view/banking.html',
            controller: 'finaController'
        });
    $urlRouterProvider.otherwise('/fina','wlfinance.html')
});