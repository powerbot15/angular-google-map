angular.module('app', ['map-controller', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
    //
    // Любые неопределенные url перенаправлять на /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Теперь определим состояния
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.view.html",
            controller: function($scope) {
                $scope.baseData = 'Base home view';
            }
        })
        .state('map', {
            url: "/map",
            templateUrl: "views/map.view.html"
        });

});