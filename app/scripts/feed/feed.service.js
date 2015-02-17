angular.module('angularExerciseApp.feed').factory('FeedService', function (FacebookService) {
  return {
    fetchFeed: FacebookService.api.bind(FacebookService, '/{userId}/feed'),

    sendPost: function (message) {
      return FacebookService.api('/{userId}/feed', 'POST', {message: message});
    },

    fetchPost: function (id) {
      return FacebookService.api('/' + id);
    },

    fetchPostComments: function (id) {
      return FacebookService.api('/' + id + '/comments');
    },

    sendComment: function (id, message) {
      return FacebookService.api('/' + id + '/comments', 'POST', {message: message});
    }
  }
});
