angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('PosCtrl', function($scope, Pos) {
  $scope.pos = Pos.all();
})

.controller('LocCtrl', function($scope, $ionicLoading) {
    
     
     google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        
         
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
  
        $scope.map = map;
    });
     
})

.controller('PosDetailCtrl', function($scope, $stateParams, Pos) {
  $scope.pos = Pos.get($stateParams.id);
})

.controller('NewsCtrl', function($scope, News) {
    $scope.items = News.all();
});
