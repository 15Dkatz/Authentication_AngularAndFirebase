var myApp = angular.module('myApp', 
    ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://angregrv.firebaseio.com/');


myApp.run(['$rootScope', '$location', 
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', 
      function(event, next, previous, error) {
        if (error='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        }; //AUTH REQUIRED
    }); //event info
}]); //run

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/music', {
      templateUrl: 'views/music.html',
      controller: 'MusicController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController',
      resolve: {
        //on this page, the following function must RESOLVE.
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        }
      }
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);