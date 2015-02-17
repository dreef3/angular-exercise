angular.module('angularExerciseApp.feed').controller('NewPostController', function ($scope, $location, FeedService) {
  $scope.message = '';
  $scope.send = function () {
    FeedService.sendPost($scope.message).then(function () {
      $location.path('/');
    });
  };
});
