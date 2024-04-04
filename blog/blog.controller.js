app.controller('blog.controller', ['$scope', 'blog', function($scope, blog) {
  blog.success(function(data) {
      $scope.franBlog = data;
    });
  }]);


