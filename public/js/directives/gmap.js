angular.module('map-directive', [])
    .directive('gMap', function(){
        function link($scope, $element, $attributes){
            console.dir($element);
            var mapOptions = {
                center: new google.maps.LatLng(49.4333300, 32.0666700),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.map = new google.maps.Map($element.get(0), mapOptions);
            google.maps.event.addListenerOnce($scope.map, 'tilesloaded', function(){
                // do something only the first time the map is loaded
                $scope.mapDeffered.resolve('map accepted');
            });
        }
        return {
            restrict: 'C',
            transclude: true,
            link: {
                post:link
            }
        }
    });