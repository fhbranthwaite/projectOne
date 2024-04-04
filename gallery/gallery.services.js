app.factory('artWorks', ['$http', function($http) {
    return $http.get('http://127.0.0.1:5500/gallery/gallery.json')
           .success(function(data) {
             return data;
           })
           .error(function(data) {
             return data;
           });
  }]);