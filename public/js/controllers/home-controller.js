var HomeController = function($scope, $event){
    this.$scope = $scope;

    var _self = this;

    $scope.changeInform = function($event){
        _self.changeInform($event);
    };

    $scope.baseData = 'Base test scope';
};

HomeController.prototype.changeInform = function($event){
    console.dir($event);
};

HomeController.$inject = ['$scope'];


angular.module('home-controller',[]).controller('homeController', HomeController);