
var MapController = function($scope, $q){
    this.$scope = $scope;
    var _this = this;

    this.$scope.mapDeffered = $q.defer();
    this.$scope.mapDeffered.promise.then(function success(message){

        alert(message);

    })

};

MapController.$inject = ['$scope', '$q'];


angular.module('map-controller',['map-directive']).controller('mapController', MapController);
