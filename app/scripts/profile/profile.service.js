angular.module('angularExerciseApp').factory('ProfileService', function (FacebookService) {
  return {
    getUserProfile: FacebookService.api.bind(FacebookService, '/{userId}')
  }
});
