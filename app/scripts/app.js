'use strict';

/**
 * @ngdoc overview
 * @name angularExerciseApp
 * @description
 * # angularExerciseApp
 *
 * Main module of the application.
 */
angular
  .module('angularExerciseApp', ['ngResource', 'ngRoute', 'angularExerciseApp.feed'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/feed', {
        templateUrl: 'scripts/feed/feed-list.html',
        controller: 'FeedListController'
      })
      .when('/feed/new', {
        templateUrl: 'scripts/feed/new-post.html',
        controller: 'NewPostController'
      })
      .when('/feed/:postId', {
        templateUrl: 'scripts/feed/feed-details.html',
        controller: 'FeedDetailsController'
      })
      .otherwise('/feed');
  })
  .run(function (FacebookService) {
    FacebookService.connect(false);
  });
