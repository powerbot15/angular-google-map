
var MapController = function($scope, $q){
    this.$scope = $scope;
    var _this = this;

    _this.$scope.mapDeffered = $q.defer();

    _this.$scope.mapDeffered.promise.then(function success(message){

        console.log(message);

    });

};

MapController.$inject = ['$scope', '$q'];


angular.module('map-controller',['map-directive']).controller('mapController', MapController);
