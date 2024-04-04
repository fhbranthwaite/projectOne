var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'gallery.controller', 
      templateUrl: 'gallery.view.html' 
    }) 
    .when('/artWorks/:id', { 
        controller: 'gallery.detail.controller', 
        templateUrl: 'gallery.detail.view.html' 
      })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}); 