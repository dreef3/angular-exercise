angular.module('angularExerciseApp.feed').controller('FeedListController', function ($scope, FeedService) {
  FeedService.fetchFeed().then(function (feed) {
    $scope.feed = feed;
  })
});
