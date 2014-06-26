angular.module('map-directive', [])
    .directive('gMap', function(){
        function link($scope, $element, $attributes){
            console.dir($element);
            var mapOptions = {
                center: new google.maps.LatLng(49.4333300, 32.0666700),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.map = new google.maps.Map($element.get(0), mapOptions);

        }
        return {
            restrict: 'C',
            transclude: true,
            link: {
                post:link
            }
        }
    });