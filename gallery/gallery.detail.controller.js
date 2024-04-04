app.controller('gallery.detail.controller', ['$scope', 'artWorks', '$routeParams', function($scope, artWorks, $routeParams) {
  artWorks.success(function(data) {
      $scope.artWorkDetail = data[$routeParams.id];
    });
  }]);