myApp.controller('MusicController', ['$scope', function($scope) {
//    $scope.music.note = "D";
//  $scope.noteDisplay = $scope.music.note;
    $scope.noteDisplay = "D";
    
    $scope.changeNote = function() {
        $scope.noteDisplay = $scope.music.note;
    }
    
}]);