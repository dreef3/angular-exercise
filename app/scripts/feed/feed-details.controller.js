angular.module('angularExerciseApp.feed').controller('FeedDetailsController',
  function ($scope, $routeParams, FeedService) {
    var postId = $routeParams.postId;

    function fetchComments() {
      FeedService.fetchPostComments(postId).then(function (comments) {
        $scope.comments = comments;
      });
    }

    $scope.comments = [];
    $scope.message = '';

    $scope.reply = function (message) {
      $scope.message = '';
      FeedService.sendComment(postId, message).then(fetchComments)
    };

    FeedService.fetchPost(postId).then(function (post) {
      $scope.post = post;
      fetchComments();
    });
  });
