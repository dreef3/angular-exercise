angular.module('angularExerciseApp').controller('ProfileController', function ($scope, ProfileService) {
  ProfileService.getUserProfile().then(function (profile) {
    $scope.profile = profile;
  }, function (error) {
    $scope.errorMessage = error;
  });
});
