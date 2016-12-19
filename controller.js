(function() {
  'use strict';

  angular
    .module('filterSample', [])
    .controller('FilterSampleController', filterSampleController)

  filterSampleController.$inject = ['$scope', '$http', 'structureService', '$location'];

  function filterSampleController($scope, $http, structureService, $location) {
    // Register upper level modules
    structureService.registerModule($location, $scope, 'filterSample');
    // --- Start filterSampleController content ---

    $scope.textInput = "";

    $http.get('modules/filtersample/emoji.json').then(function (data) {
      $scope.emojiList = data;
    }, function(err) {
      $scope.emojiList = undefined;
    });

    $scope.translate = function() {
      $scope.textToEmoji = $scope.text.input;
    };
    // --- End filterSampleController content ---
  }
}());
