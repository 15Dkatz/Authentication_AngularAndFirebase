myApp.controller('RegistrationController', 
    ['$scope', 'Authentication',
     function($scope, Authentication) {
       //factory creates your own service, in this case Authentication
//      var ref = new Firebase(FIREBASE_URL);
//      var auth = $firebaseAuth(ref);

    $scope.login = function() {
       Authentication.login($scope.user);
    }; // login
    
    $scope.register = function() {
      Authentication.register($scope.user)
    };// register
       
}]);//Controller