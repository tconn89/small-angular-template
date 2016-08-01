
InboxCtrl = function InboxCtrl($scope) {
      re = /[5-8]/;
      $scope.title = 'Write a title here...' ;

      $scope.titleFilter = function() {
        $scope.title = $scope.title.match(re);
        console.log("hey");
      }
};
WelcomeCtrl = function WelcomeCtrl($scope){

  console.log("Welcome")
};
MyApp = angular.module('MyApp',['ngMaterial', 'ui.router']);

MyApp.controller('InboxCtrl',['$scope','$state', InboxCtrl]);
MyApp.controller('WelcomeCtrl',['$scope','$state', WelcomeCtrl]);
  
MyApp.config(
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home'); 
    $stateProvider
      .state('newcomer',
        {
        url: '/newcomer',
        templateUrl: '/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .state('newcomer.form',
        {
        url: '/form',
        templateUrl: 'form.html',
        controller: 'WelcomeCtrl'
      });
  });
myCards = [];
myNames = [];
container = $('#five_mana');

function printRow(element, index, array){
  var myRow = $('<tr></tr>').appendTo(container)
  printElem(myRow, element)
}

function printElem(element, index, array) {
  if(index > array.length/2){
    var myDiv = $('<div></div>').appendTo($('.right'));
    myDiv.text(element.name);
  }
  else {
    var myDiv = $('<div></div>').appendTo($('.left'));
    myDiv.text(element.name);

  }
  myNames.push(element.name);
}

function printImages(element, index, array){
  if(element.img){
    var myDiv = $('<img src="' + element.img + '">').appendTo($('#img'));
  }
}
function fillNames(){

}
$.ajax({
    url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/The%20Grand%20Tournament', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(response) { 
      response.forEach(printElem);
      response.forEach(printImages);
      $('[itemprop="headline"]').each(function( index ) {
       $(this).text( response[23].name);
});
    },

    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "x13pMq3PJQmshfyRvJn2OH5zv32Wp1jEQmUjsntZ936hPPEJmC"); // Enter here your Mashape key
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
*/
