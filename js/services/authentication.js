myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', function($rootScope, $firebaseAuth, FIREBASE_URL) {
                
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    return {
      login: function(user) {
        $scope.message="Welcome " + $scope.user.email;
      },

      register: function(user) {
        auth.$createUser({
        email: user.email,
        password: user.password
        }).then(function(regUser) {
          
          
          var regRef = new Firebase(FIREBASE_URL + 'users')
          .child(regUser.uid).set({
            date: Firebase.ServerValue.TIMESTAMP,
            regUser: regUser.uid,
            //user enters this information in form
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            
          }); //user info
          
          $rootScope.message="Welcome " + user.firstname + ". Thanks for registering.";
          
          
        }).catch(function(error) {
          $rootScope.message=error.message;
        })
      }
    };
                
}]);