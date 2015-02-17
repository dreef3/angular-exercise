angular.module('angularExerciseApp').factory('FacebookService', function ($q, $rootScope) {
  var init = $q.defer();
  ready = $q.defer();

  $rootScope.$on('fbInit', function () {
    FB.init({appId: '999878733357357', status: true, cookie: true, xfbml: true, version: 'v2.2'});
    init.resolve();
  });

  return {
    connect: function (force) {
      init.promise.then(function () {
        FB.getLoginStatus(function (response) {
          if (response.status === 'connected' && !force) {
            userId = response.authResponse.userID;
            ready.resolve();
          } else {
            FB.login(function (response) {
              if (response.status === 'connected') {
                userId = response.authResponse.userID;
                ready.resolve();
              } else {
                ready.reject();
              }
            }, {
              scope: 'public_profile,read_stream,email,user_birthday,publish_actions'
            });
          }
        });
      });

      return ready.promise;
    },

    api: function (url, method, params) {
      var result = $q.defer();
      this.connect().then(function () {
        FB.api(url.replace('{userId}', userId), method || 'GET', params, function (response) {
          if (response.error) {
            result.reject(response.error);
          } else {
            console.log(response);
            result.resolve(response.data || response);
          }
        });
      }, result.reject);
      return result.promise;
    }
  };
});
