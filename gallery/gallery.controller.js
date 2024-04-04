app.controller('gallery.controller', ['$scope', 'artWorks', function($scope, artWorks) {
    artWorks.success(function(data) {
      $scope.artWorks = data;
    });
  }]);