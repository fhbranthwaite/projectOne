app.factory('blog', ['$http', function($http) { 
    return $http.get('http://127.0.0.1:5500/blog/blog.json') 
              .success(function(data) { 
                return data; 
              }) 
              .error(function(err) { 
                return err; 
              }); 
  }]);