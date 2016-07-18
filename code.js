
InboxCtrl = function InboxCtrl($scope) {
      re = /[5-8]/
      $scope.title = 'Write a title here...' ;

      $scope.titleFilter = function() {
        $scope.title = $scope.title.match(re)
        console.log("hey")
      }
};
angular.module('myApp',['ngMaterial']).controller('InboxCtrl',['$scope', InboxCtrl])
  
/*
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
*/