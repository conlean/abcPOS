angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('PosCtrl', function($scope, Pos) {
  $scope.pos = Pos.all();
})

.controller('PosDetailCtrl', function($scope, $stateParams, Pos) {
  $scope.pos = Pos.get($stateParams.id);
})

.controller('NewsCtrl', function($scope, News) {
    $scope.items = News.all();
});
